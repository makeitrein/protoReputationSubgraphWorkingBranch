import { Address, Bytes, ethereum, log } from "@graphprotocol/graph-ts"
import {
  superRare,
  WhitelistCreator,
  Bid,
  AcceptBid,
  CancelBid,
  Sold,
  SalePriceSet,
  OwnershipTransferred,
  Transfer,
  Approval
} from "../generated/superRare/superRare"
import {
  BaseMetric,
  TransactionMetadata,
  InMemoryIncrementStore,
  EventType,
  MetricParam,
  BadgeType,
  BadgeMetricLookup,
  UserBadge
} from "../generated/schema"

function checkType(event: ethereum.EventParam): Array<string> {
  let ret:Array<string>;
  switch(event.value.kind){
    case ethereum.ValueKind.ADDRESS:
      ret = [
        event.value.toAddress().toHexString(),
        "ADDRESS"
      ]
      break
    case ethereum.ValueKind.FIXED_BYTES:
        ret = [ 
           event.value.toBytes().toString(),
          "FIXED_BYTES"
          ]
      break
    case ethereum.ValueKind.BYTES:
      ret = [
         event.value.toBytes().toString(),
        "BYTES"
        ]
      break
    case ethereum.ValueKind.INT:
       ret = [
         event.value.toBigInt().toString(),
         "INT"
        ]
      break
    case ethereum.ValueKind.UINT:
      ret = [
        event.value.toBigInt().toString(),
        "UINT"
      ]
      break
    case ethereum.ValueKind.BOOL:
        ret = [
        event.value.toBoolean().toString()],
        "BOOL"
      break
    case ethereum.ValueKind.STRING:
      ret = [
        event.value.toString(),
        "STRING"
      ]
      break
    case ethereum.ValueKind.FIXED_ARRAY:
      ret = [
      "placeholder til I refactor",
      "FIXED_ARRAY"
      ]
      break
    case ethereum.ValueKind.ARRAY:
      ret = [
      "placeholder til I refactor",
      "ARRAY"
      ]
      break
    case ethereum.ValueKind.TUPLE:
      ret = [
      "placeholder til I refactor",
      "TUPLE"
      ]
      break
    default:
      ret = [
      "Something went wrong here",
      "Unknown"
      ]
      break
  }
return ret;
}

function getOrCreateEventType(eventName: string): EventType {
  let entity = EventType.load(eventName)
  if (entity == null) {
    entity = new EventType(eventName)
    entity.save()
  }
  return entity
}

function getOrCreateBaseMetric(
  event: ethereum.Event,
  eventType: EventType
): BaseMetric {
  let baseMetricID =
    eventType.id +
    "-" +
    event.transaction.hash.toHexString() +
    "-" +
    event.logIndex.toHexString()
  let entity = new BaseMetric(baseMetricID)
  let transactionData = getOrCreateNewTransactionMetadata(event)
  entity.transactionMetadata = transactionData.id
  entity.type = eventType.id
  //let paramsArray = event.parameters as Array<ethereum.EventParam>
  let paramsArray:Array<ethereum.EventParam> = event.parameters
  let param = new MetricParam(baseMetricID)
  // let info:TypeInfo;
  for (let i = 0; i < paramsArray.length; i++) {
    let eventParam:ethereum.EventParam = paramsArray[i]
    let info:Array<string> = checkType(eventParam);
    switch (i) {
      case 0:
        param.paramName1 =  eventParam.name
        param.paramValue1 = info[0]
        param.paramType1 = info[1]
        break
      case 1:
        param.paramName2 =  eventParam.name
        param.paramValue2 = info[0]
        param.paramType2 = info[1] 
        break
      case 2:
        param.paramName3 =  eventParam.name
        param.paramValue3 = info[0] 
        param.paramType3 = info[1] 
        break
      case 3:
        param.paramName4 =  eventParam.name
        param.paramValue4 = info[0] 
        param.paramType4 = info[1] 
        break
      case 4:
        param.paramName5 =  eventParam.name
        param.paramValue5 = info[0] 
        param.paramType5 = info[1] 
        break
      case 5:
        param.paramName6 =  eventParam.name
        param.paramValue6 = info[0] 
        param.paramType6 = info[1] 
        break
      case 6:
        param.paramName7 =  eventParam.name
        param.paramValue7 = info[0]
        param.paramType7 = info[1]
        break
      case 7:
        param.paramName8 =  eventParam.name
        param.paramValue8 = info[0]
        param.paramType8 = info[1] 
        break
      case 8:
        param.paramName9 =  eventParam.name
        param.paramValue9 = info[0] 
        param.paramType9 = info[1] 
        break
      case 9:
        param.paramName10 =  eventParam.name
        param.paramValue10 = info[0] 
        param.paramType10 = info[1] 
        break
      case 10:
        param.paramName11 =  eventParam.name
        param.paramValue11 = info[0] 
        param.paramType11 = info[1] 
        break
      case 11:
        param.paramName12 =  eventParam.name
        param.paramValue12 = info[0] 
        param.paramType12 = info[1] 
        break
      case 12:
        param.paramName13 =  eventParam.name
        param.paramValue13 = info[0] 
        param.paramType13 = info[1] 
        break
      default:
        break
    }
  }
  param.save()
  entity.params = param.id;
  entity.save()
  return entity
}

function getOrCreateNewTransactionMetadata(
  event: ethereum.Event
): TransactionMetadata {
  let transactionMetaData = new TransactionMetadata(
    event.transaction.hash.toHex() + "-" + event.logIndex.toHex()
  )
  transactionMetaData.txValue = event.transaction.value
  transactionMetaData.timestamp = event.block.timestamp
  transactionMetaData.blockNumber = event.block.number
  transactionMetaData.txTo = event.transaction.to
  transactionMetaData.txFrom = event.transaction.from
  transactionMetaData.txGas = event.transaction.gasPrice
  transactionMetaData.save()
  return transactionMetaData
}

export function handleWhitelistCreator(event: WhitelistCreator): void {
  let eventType = getOrCreateEventType("WhitelistCreator")
  let baseMetric = getOrCreateBaseMetric(event, eventType)
}

export function handleBid(event: Bid): void {
  let eventType = getOrCreateEventType("Bid")
  let baseMetric = getOrCreateBaseMetric(event, eventType)
}

export function handleAcceptBid(event: AcceptBid): void {
  let eventType = getOrCreateEventType("AcceptBid")
  let baseMetric = getOrCreateBaseMetric(event, eventType)
}

export function handleCancelBid(event: CancelBid): void {
  let eventType = getOrCreateEventType("CancelBid")
  let baseMetric = getOrCreateBaseMetric(event, eventType)
}

export function handleSold(event: Sold): void {
  let eventType = getOrCreateEventType("Sold")
  let baseMetric = getOrCreateBaseMetric(event, eventType)
}

export function handleSalePriceSet(event: SalePriceSet): void {
  let eventType = getOrCreateEventType("SalePriceSet")
  let baseMetric = getOrCreateBaseMetric(event, eventType)
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let eventType = getOrCreateEventType("OwnershipTransferred")
  let baseMetric = getOrCreateBaseMetric(event, eventType)
}

export function handleTransfer(event: Transfer): void {
  let eventType = getOrCreateEventType("Transfer")
  let baseMetric = getOrCreateBaseMetric(event, eventType)
}

export function handleApproval(event: Approval): void {
  let eventType = getOrCreateEventType("Approval")
  let baseMetric = getOrCreateBaseMetric(event, eventType)
}
