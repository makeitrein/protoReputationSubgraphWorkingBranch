import { BigInt, ethereum, log } from "@graphprotocol/graph-ts";
import {
  BadgePathway,
    BadgeType,
  BaseMetric,
  EventType,
  MetricParam,
  ReputationSource,
  SmartContract,
  TransactionMetadata,
  UserBadge,
  UserProgress,
} from "../generated/schema";
import {
  AcceptBid,
  Approval,
  Bid,
  CancelBid,
  OwnershipTransferred,
  SalePriceSet,
  Sold,
  Transfer,
  WhitelistCreator,
} from "../generated/superRare/superRare";

function getOrCreateReputationSource(): ReputationSource {
  // TODO Get Reputation Source Data from Initial CLI Input + graph add (new inputs)
  let mockName = "The Graph Mainnet";
  let mockType = "PROTOCOL";

  let entity = ReputationSource.load(mockName);
  if (entity == null) {
    entity = new ReputationSource(mockName);
    entity.save();
  }
  return entity;
}

function getOrCreateSmartContract(address: string, chainID: i32, startBlock: i32): SmartContract {
  let entity = SmartContract.load(address+'-'+chainID.toString());
  if (entity == null) {
    entity = new SmartContract(address+'-'+chainID.toString());

    let reputationSource = getOrCreateReputationSource();
    entity.address = address;
    entity.reputationSource = reputationSource.id;
    entity.chainID = BigInt.fromI32(chainID);
    entity.startBlock = BigInt.fromI32(startBlock);
    entity.save();
  }
  return entity;
}

function getOrCreateEventType(eventName: string, address: string, chainID: i32, startBlock: i32): EventType {
  let entity = EventType.load(eventName);
  if (entity == null) {
    entity = new EventType(eventName);
    entity.eventCounter = BigInt.fromI32(0);

    let smartContract = getOrCreateSmartContract(address, chainID, startBlock);
    entity.smartContract = smartContract.id;
    entity.save();
  } else {
    entity.eventCounter = entity.eventCounter.plus(BigInt.fromI32(1));
    entity.save();
  }
  return entity;
}

function checkType(event: ethereum.EventParam): Array<string> {
  let ret: Array<string>;
  switch (event.value.kind) {
    case ethereum.ValueKind.ADDRESS:
      ret = [event.value.toAddress().toHexString(), "ADDRESS"];
      break;
    case ethereum.ValueKind.FIXED_BYTES:
      ret = [event.value.toBytes().toHexString(), "FIXED_BYTES"];
      break;
    case ethereum.ValueKind.BYTES:
      ret = [event.value.toBytes().toHexString(), "BYTES"];
      break;
    case ethereum.ValueKind.INT:
      ret = [event.value.toBigInt().toHexString(), "INT"];
      break;
    case ethereum.ValueKind.UINT:
      ret = [event.value.toBigInt().toHexString(), "UINT"];
      break;
    case ethereum.ValueKind.BOOL:
      ret = [event.value.toBoolean().toString(), "BOOL"];
      break;
    case ethereum.ValueKind.STRING:
      ret = [event.value.toString(), "STRING"];
      break;
    case ethereum.ValueKind.FIXED_ARRAY:
      ret = [event.value.toString(), checkType(new ethereum.EventParam("Some string", event.value.toArray()[0]))[1]+"_FIXED_ARRAY"];
      break;
    case ethereum.ValueKind.ARRAY:
      ret = [event.value.toString(), checkType(new ethereum.EventParam("Some string", event.value.toArray()[0]))[1]+"_ARRAY"];
      break;
    case ethereum.ValueKind.TUPLE:
      ret = [event.value.toString(), "Tuple"];
      break;
    default:
      ret = ["Something went wrong here", "Unknown"];
      break;
  }
  return ret;
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
    event.logIndex.toHexString();
  let entity = new BaseMetric(baseMetricID);
  let transactionData = getOrCreateNewTransactionMetadata(event);
  entity.transactionMetadata = transactionData.id;
  entity.type = eventType.id;
  //let paramsArray = event.parameters as Array<ethereum.EventParam>
  let paramsArray: Array<ethereum.EventParam> = event.parameters;
  let param = new MetricParam(baseMetricID);
  // let info:TypeInfo;
  for (let i = 0; i < paramsArray.length; i++) {
    let eventParam: ethereum.EventParam = paramsArray[i];
    let info: Array<string> = checkType(eventParam);
    switch (i) {
      case 0:
        param.paramName1 = eventParam.name;
        param.paramValue1 = info[0];
        param.paramType1 = info[1];
        break;
      case 1:
        param.paramName2 = eventParam.name;
        param.paramValue2 = info[0];
        param.paramType2 = info[1];
        break;
      case 2:
        param.paramName3 = eventParam.name;
        param.paramValue3 = info[0];
        param.paramType3 = info[1];
        break;
      case 3:
        param.paramName4 = eventParam.name;
        param.paramValue4 = info[0];
        param.paramType4 = info[1];
        break;
      case 4:
        param.paramName5 = eventParam.name;
        param.paramValue5 = info[0];
        param.paramType5 = info[1];
        break;
      case 5:
        param.paramName6 = eventParam.name;
        param.paramValue6 = info[0];
        param.paramType6 = info[1];
        break;
      case 6:
        param.paramName7 = eventParam.name;
        param.paramValue7 = info[0];
        param.paramType7 = info[1];
        break;
      case 7:
        param.paramName8 = eventParam.name;
        param.paramValue8 = info[0];
        param.paramType8 = info[1];
        break;
      case 8:
        param.paramName9 = eventParam.name;
        param.paramValue9 = info[0];
        param.paramType9 = info[1];
        break;
      case 9:
        param.paramName10 = eventParam.name;
        param.paramValue10 = info[0];
        param.paramType10 = info[1];
        break;
      case 10:
        param.paramName11 = eventParam.name;
        param.paramValue11 = info[0];
        param.paramType11 = info[1];
        break;
      case 11:
        param.paramName12 = eventParam.name;
        param.paramValue12 = info[0];
        param.paramType12 = info[1];
        break;
      case 12:
        param.paramName13 = eventParam.name;
        param.paramValue13 = info[0];
        param.paramType13 = info[1];
        break;
      default:
        break;
    }
  }
  param.save();
  entity.params = param.id;
  entity.save();
  return entity;
}

function getOrCreateNewTransactionMetadata(
  event: ethereum.Event
): TransactionMetadata {
  let transactionMetaData = new TransactionMetadata(
    event.transaction.hash.toHex() + "-" + event.logIndex.toHex()
  );
  transactionMetaData.txValue = event.transaction.value;
  transactionMetaData.timestamp = event.block.timestamp;
  transactionMetaData.blockNumber = event.block.number;
  transactionMetaData.txTo = event.transaction.to;
  transactionMetaData.txFrom = event.transaction.from;
  transactionMetaData.txGas = event.transaction.gasPrice;
  transactionMetaData.save();
  return transactionMetaData;
}

// this is a hardcoded function for creating an existence check badge
/**
export function getOrCreateHasReceived(base: BaseMetric, meta: TransactionMetadata): void{
  // load in hardcoded badgeType id
  let badgeType = BadgeType.load("1")
  // the badgeType hasnt been made yet create a new instance
  if (badgeType == null){
    badgeType = new BadgeType('1')
    badgeType.name = 'Has Received'
    badgeType.ipfs = 'ipfs placeholder'
    badgeType.soul = new BigInt(12)
    badgeType.linkingParam = 'transactionMetadata.txFrom'
    // I don't think that we need this honestly I think this should just be a baseMetric
    badgeType.baseMetric = ["1-"+base.id]
    badgeType.save()
  }
  let linkingValue = meta.txFrom;
  if(linkingValue){
    let userBadge = UserBadge.load("1-"+linkingValue.toHexString())
    if(userBadge == null){
      userBadge = new UserBadge("1-"+linkingValue.toHexString())
      userBadge.badge = "1"
      userBadge.account = linkingValue
      userBadge.awarded = true
      userBadge.counter = new BigInt(1)
      userBadge.save()
    }
  }
}

export function getOrCreateCounter(base: BaseMetric, meta: TransactionMetadata): void{
  // load in hardcoded badgeType id
  let badgeType = BadgeType.load('2')
  // the badgeType hasnt been made yet create a new instance
  if (badgeType == null){
    badgeType = new BadgeType('2')
    badgeType.name = 'Has Received 5 times'
    badgeType.ipfs = 'ipfs placeholder'
    badgeType.soul = new BigInt(69)
    badgeType.linkingParam = 'transactionMetadata.txFrom'
    // I don't think that we need this honestly I think this should just be a baseMetric
    badgeType.baseMetric = ["1-"+base.id]
    badgeType.save()
  }
  let linkingValue = meta.txFrom;
  if(linkingValue){
    let userBadge = UserBadge.load("2-"+linkingValue.toHexString())
    if(userBadge == null){
      userBadge = new UserBadge("2-"+linkingValue.toHexString())
      userBadge.badge = "2"
      userBadge.account = linkingValue
      userBadge.awarded = true
      userBadge.counter = new BigInt(1)
      userBadge.save()
    } else if(userBadge.counter){
      // check if the counter is above a threshold
      if(userBadge.counter > new BigInt(5)){
        userBadge.awarded = true
        userBadge.save()
      }
    }
  }
} */

export function awardDelegationNation(base: BaseMetric, meta: TransactionMetadata): void{
  let badgePathway = BadgePathway.load("hardcoded");
  if(badgePathway === null){
    badgePathway = new BadgePathway("hardcoded");
    badgePathway.badges = (["hardcoded-1","hardcoded-2","hardcoded-3"]);
    badgePathway.winnerObject = ("transactionMetadata");
    badgePathway.winnerLinkage = ("txFrom");
    badgePathway.save()
  }
  log.info("BADGE PATHWAY IS {}",[badgePathway.id])
  let comparison = TransactionMetadata.load(base.transactionMetadata)
  if(!comparison) return
  log.info("COMPARISON IS {}",[comparison.id])
  let userProgress = UserProgress.load(comparison.txFrom.toHexString()+"-hardcoded")
  if(userProgress === null){
    userProgress = new UserProgress(comparison.txFrom.toHexString() + "-hardcoded");
    userProgress.address = (comparison.txFrom.toHexString());
    userProgress.badgePathway = "hardcoded";
    userProgress.value = BigInt.fromI32(1);
    userProgress.save();
    log.info("USERPROGRESS IS {}",[userProgress.id])
  } else {
  userProgress.value = userProgress.value.plus(BigInt.fromI32(1));
  userProgress.save()
  log.info("USERPROGRESS VALUE IS WHEN ADDING {}",[userProgress.value.toString()])
  }
  if(userProgress.value > BigInt.fromI32(1)){
    log.info("IT IS BIGGER THAN ONE {}",[userProgress.value.toString()])
    let userBadge = UserBadge.load("hardcoded-1"+userProgress.address)
    if(userBadge === null){
    userBadge = new UserBadge("hardcoded-1"+userProgress.address);
    userBadge.badge = "hardcoded-1";
    userBadge.account = userProgress.address;
    userBadge.save();
    }
  }
  if(userProgress.value > BigInt.fromI32(3)){
    let userBadge = UserBadge.load("hardcoded-2"+userProgress.address)
    if(userBadge === null){
    userBadge = new UserBadge("hardcoded-2"+userProgress.address);
    userBadge.badge = "hardcoded-2";
    userBadge.account = userProgress.address;
    userBadge.save();
    }
  }
  if(userProgress.value > BigInt.fromI32(5)){
    let userBadge = UserBadge.load("hardcoded-3"+userProgress.address)
    if(userBadge === null){
    userBadge = new UserBadge("hardcoded-3"+userProgress.address);
    userBadge.badge = "hardcoded-3";
    userBadge.account = userProgress.address;
    // userBadge.baseMetric = base
    userBadge.save();
    }
  }
}

/*
export function awardSignalSpeed(base: BaseMetric, meta: TransactionMetadata): void{
  let badgePathway = BadgePathway.load("anotherHardcoded");
  if(badgePathway === null){
    badgePathway = new BadgePathway("anotherHardcoded");
    badgePathway.badges = (["anotherHardcoded-1","hardcoded-2","hardcoded-3"]);
    badgePathway.comparisonObject = ("transactionMetadata");
    badgePathway.comparisonLinkage = ("txGas");
    badgePathway.winnerObject = ("transactionMetadata");
    badgePathway.winnerLinkage = ("txFrom");
    badgePathway.save()
  }
  let comparison = TransactionMetadata.load(base.transactionMetadata)
  if(!comparison) return
  let userProgress = UserProgress.load(comparison.txFrom+"-anotherHardcoded")
  if(userProgress === null){
    userProgress = new UserProgress(comparison.txFrom + "-anotherHardcoded");
    userProgress.address = (comparison.txFrom.toHexString());
    userProgress.badgePathway = "anotherHardcoded";
    userProgress.value = new BigInt(1);
    userProgress.save();
  } else {
  userProgress.value = userProgress.value.plus(new BigInt(1));
  }
  if(userProgress.value > new BigInt(1)){
    let userBadge = new UserBadge("anotherHardcoded-1"+userProgress.address);
    userBadge.badge = "anotherHardcoded-1";
    userBadge.account = userProgress.address;
    userBadge.save();
  }
  if(userProgress.value > new BigInt(3)){
    let userBadge = new UserBadge("anotherHardcoded-2"+userProgress.address);
    userBadge.badge = "anotherHardcoded-1";
    userBadge.account = userProgress.address;
    userBadge.save();
  }
  if(userProgress.value > new BigInt(5)){
    let userBadge = new UserBadge("anotherHardcoded-3"+userProgress.address);
    userBadge.badge = "anotherHardcoded-1";
    userBadge.account = userProgress.address;
    userBadge.save();
  }
} 
*/

/*
helper function to actually mint a badge

  kinda what we are doin
  if(userProgress.value > new BigInt(3)){
    let badgeType = new BadgeType("hardcoded-2");
    badgeType.name = "Sample Name level 2";
    badgeType.ipfs = "Sample IPFS";
    badgeType.soul = new BigInt(3);
    badgeType.pathway = "hardcoded";
    badgeType.save();
  }

/* 
export function getOrCreateHasReceived(base: BaseMetric, meta: TransactionMetadata): void{
    //hardcoded in right now
    let badgeTypeID = "1"
    // check to see if user has a badge of this type
    let badge = UserBadge.load(badgeTypeID+"-"+meta.txFrom.toHexString())
    // checks the event type
    if(base.type === "Transfer"){
        if(badge === null){
            // this is the comparison against the linkage
            badge = new UserBadge(badgeTypeID+"-"+meta.txFrom.toHexString())
            badge.badge = badgeTypeID
            badge.account = meta.txFrom
            badge.vanityValue = new BigInt(1)
            badge.save()
        }
    }
}
// TODO: Refactor the flow of this
export function getOrCreateCounter(base: BaseMetric, meta: TransactionMetadata): void{
    // do some counter shit 
    let badgeTypeID = "2"
    // load in badge type + linkage
    let badge = UserBadge.load(badgeTypeID+"-"+meta.txFrom.toHexString())
    let eventType = EventType.load(base.type)
    if(eventType == null) return
    if(eventType.id === "Transfer"){
        if(eventType.eventCounter > new BigInt(5)){
            // this is the comparison against the linkage
            badge = new UserBadge(badgeTypeID+"-"+meta.txFrom.toHexString())
            badge.account = meta.txFrom
            badge.badge = badgeTypeID
            badge.save()
        }
    }
}
export function getOrCreateAccumulator(base: BaseMetric, meta: TransactionMetadata): void{
  // do some accumulator shit 
    // do some counter shit 
    let badgeTypeID = "3"
    // load in badge type + linkage
    let badge = UserBadge.load(badgeTypeID+"-"+meta.txFrom.toHexString())
    let eventType = EventType.load(base.type)
    if(eventType == null) return
    if(eventType.id === "Transfer"){
        // some value here
        //if(badge?.vanityValue > new bigint(5)){
        if(badge === null){
            // this is the comparison against the linkage
            badge = new UserBadge(badgeTypeID+"-"+meta.txFrom.toHexString())
            badge.account = meta.txFrom
            badge.badge = badgeTypeID
            badge.vanityValue = new BigInt(1)
            badge.save()
        }
    }
}
export function getOrCreateDirectCheck(base: BaseMetric, meta: TransactionMetadata): void{
    // do some direct check
    let badgeTypeID = "4"
    // load in badge type + linkage
    let badge = UserBadge.load(badgeTypeID+"-"+meta.txFrom.toHexString())
    let eventType = EventType.load(base.type)
    if(eventType == null) return
    if(eventType.id === "Transfer"){
        if(meta.txGas > new BigInt(500000000)){
            badge = new UserBadge(badgeTypeID+"-"+meta.txFrom.toHexString())
            badge.account = meta.txFrom
            badge.badge = badgeTypeID
            badge.save()
        }
    }
}
*/

export function handleWhitelistCreator(event: WhitelistCreator): void {
  let chainID = 1;
  let startBlock = 21266142;
  let address = "0x3f0ad15fB1Ee96f649499C6198713D11781d93f2";
  let eventType = getOrCreateEventType("WhitelistCreator", address, chainID, startBlock);
  let baseMetric = getOrCreateBaseMetric(event, eventType);
  let transactionMetaData = TransactionMetadata.load(baseMetric.transactionMetadata)
  if (transactionMetaData == null) return
}

export function handleBid(event: Bid): void {
  let chainID = 1;
  let startBlock = 21266142;
  let address = "0x3f0ad15fB1Ee96f649499C6198713D11781d93f2";
  let eventType = getOrCreateEventType("Bid", address, chainID, startBlock);
  let baseMetric = getOrCreateBaseMetric(event, eventType);
  let transactionMetaData = TransactionMetadata.load(baseMetric.transactionMetadata)
  if (transactionMetaData == null) return
}

export function handleAcceptBid(event: AcceptBid): void {
  let chainID = 1;
  let startBlock = 21266142;
  let address = "0x3f0ad15fB1Ee96f649499C6198713D11781d93f2";
  let eventType = getOrCreateEventType("AcceptBid", address, chainID, startBlock);
  let baseMetric = getOrCreateBaseMetric(event, eventType);
  let transactionMetaData = TransactionMetadata.load(baseMetric.transactionMetadata)
  if (transactionMetaData == null) return
}

export function handleCancelBid(event: CancelBid): void {
  let chainID = 1;
  let startBlock = 21266142;
  let address = "0x3f0ad15fB1Ee96f649499C6198713D11781d93f2";
  let eventType = getOrCreateEventType("CancelBid", address, chainID, startBlock);
  let baseMetric = getOrCreateBaseMetric(event, eventType);
  let transactionMetaData = TransactionMetadata.load(baseMetric.transactionMetadata)
  if (transactionMetaData == null) return
}

export function handleSold(event: Sold): void {
  let chainID = 1;
  let startBlock = 21266142;
  let address = "0x3f0ad15fB1Ee96f649499C6198713D11781d93f2";
  let eventType = getOrCreateEventType("Sold", address, chainID, startBlock);
  let baseMetric = getOrCreateBaseMetric(event, eventType);
  let transactionMetaData = TransactionMetadata.load(baseMetric.transactionMetadata)
  if (transactionMetaData == null) return
}

export function handleSalePriceSet(event: SalePriceSet): void {
  let chainID = 1;
  let startBlock = 21266142;
  let address = "0x3f0ad15fB1Ee96f649499C6198713D11781d93f2";
  let eventType = getOrCreateEventType("SalePriceSet", address, chainID, startBlock);
  let baseMetric = getOrCreateBaseMetric(event, eventType);
  let transactionMetaData = TransactionMetadata.load(baseMetric.transactionMetadata)
  if (transactionMetaData == null) return
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let chainID = 1;
  let startBlock = 21266142;
  let address = "0x3f0ad15fB1Ee96f649499C6198713D11781d93f2";
  let eventType = getOrCreateEventType("OwnershipTransferred",address, chainID, startBlock);
  let baseMetric = getOrCreateBaseMetric(event, eventType);
  let transactionMetaData = TransactionMetadata.load(baseMetric.transactionMetadata)
  if (transactionMetaData == null) return
}

export function handleTransfer(event: Transfer): void {
  let chainID = 1;
  let startBlock = 21266142;
  let address = "0x3f0ad15fB1Ee96f649499C6198713D11781d93f2";
  let eventType = getOrCreateEventType("Transfer" , address, chainID, startBlock);
  let baseMetric = getOrCreateBaseMetric(event, eventType);
  let transactionMetaData = TransactionMetadata.load(baseMetric.transactionMetadata)
  if (transactionMetaData == null) {
    log.info("#####",[])
    return
  }
  awardDelegationNation(baseMetric, transactionMetaData);
}

export function handleApproval(event: Approval): void {
  let chainID = 1;
  let startBlock = 21266142;
  let address = "0x3f0ad15fB1Ee96f649499C6198713D11781d93f2";
  let eventType = getOrCreateEventType("Approval", address, chainID, startBlock);
  let baseMetric = getOrCreateBaseMetric(event, eventType);
  let transactionMetaData = TransactionMetadata.load(baseMetric.transactionMetadata)
  if (transactionMetaData == null) return
}
