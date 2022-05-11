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
  let paramsArray = event.parameters as Array<ethereum.EventParam>
  // let params = new MetricParam(baseMetricID)
  // for (let i = 0; i <= paramsArray.length; i++) {
  //   let eventParam = paramsArray[i] as ethereum.EventParam
  //   log.info("Event Param: {}", [eventParam.name.toString()])
  //   switch (i) {
  //     case 0:
  //       //@ts-ignore
  //       params.paramName1 = "name" 
  //       //params.paramValue1 = eventParam.value.toString()
  //       break
  //     case 1:
  //       //@ts-ignore
  //       params.paramName2 = "name" 
  //       //params.paramValue2 = eventParam.value.toString()
  //       break
  //     case 2:
  //       //@ts-ignore
  //       params.paramName3 = "name" 
  //       // params.paramValue3 = eventParam.value.toString()
  //       break
  //     case 3:
  //       //@ts-ignore
  //       params.paramName4 = "name" 
  //       // params.paramValue4 = eventParam.value.toString()
  //       break
  //     case 4:
  //       //@ts-ignore
  //       params.paramName5 = "name" 
  //       // params.paramValue5 = eventParam.value.toString()
  //       break
  //     case 5:
  //       //@ts-ignore
  //       params.paramName6 = "name" 
  //       // params.paramValue6 = eventParam.value.toString()
  //       break
  //     default:
  //       break
  //   }
  // }
  // params.save()
  // entity.params = params.id;
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
