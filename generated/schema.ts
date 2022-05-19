// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class TransactionMetadata extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransactionMetadata entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TransactionMetadata must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TransactionMetadata", id.toString(), this);
    }
  }

  static load(id: string): TransactionMetadata | null {
    return changetype<TransactionMetadata | null>(
      store.get("TransactionMetadata", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get txValue(): BigInt {
    let value = this.get("txValue");
    return value!.toBigInt();
  }

  set txValue(value: BigInt) {
    this.set("txValue", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get txTo(): Bytes | null {
    let value = this.get("txTo");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set txTo(value: Bytes | null) {
    if (!value) {
      this.unset("txTo");
    } else {
      this.set("txTo", Value.fromBytes(<Bytes>value));
    }
  }

  get txFrom(): Bytes {
    let value = this.get("txFrom");
    return value!.toBytes();
  }

  set txFrom(value: Bytes) {
    this.set("txFrom", Value.fromBytes(value));
  }

  get txGas(): BigInt {
    let value = this.get("txGas");
    return value!.toBigInt();
  }

  set txGas(value: BigInt) {
    this.set("txGas", Value.fromBigInt(value));
  }
}

export class InMemoryIncrementStore extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save InMemoryIncrementStore entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type InMemoryIncrementStore must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("InMemoryIncrementStore", id.toString(), this);
    }
  }

  static load(id: string): InMemoryIncrementStore | null {
    return changetype<InMemoryIncrementStore | null>(
      store.get("InMemoryIncrementStore", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get incrementValue(): BigInt {
    let value = this.get("incrementValue");
    return value!.toBigInt();
  }

  set incrementValue(value: BigInt) {
    this.set("incrementValue", Value.fromBigInt(value));
  }
}

export class MetricParam extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MetricParam entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MetricParam must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MetricParam", id.toString(), this);
    }
  }

  static load(id: string): MetricParam | null {
    return changetype<MetricParam | null>(store.get("MetricParam", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get paramName1(): string | null {
    let value = this.get("paramName1");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramName1(value: string | null) {
    if (!value) {
      this.unset("paramName1");
    } else {
      this.set("paramName1", Value.fromString(<string>value));
    }
  }

  get paramValue1(): string | null {
    let value = this.get("paramValue1");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramValue1(value: string | null) {
    if (!value) {
      this.unset("paramValue1");
    } else {
      this.set("paramValue1", Value.fromString(<string>value));
    }
  }

  get paramType1(): string | null {
    let value = this.get("paramType1");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramType1(value: string | null) {
    if (!value) {
      this.unset("paramType1");
    } else {
      this.set("paramType1", Value.fromString(<string>value));
    }
  }

  get paramName2(): string | null {
    let value = this.get("paramName2");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramName2(value: string | null) {
    if (!value) {
      this.unset("paramName2");
    } else {
      this.set("paramName2", Value.fromString(<string>value));
    }
  }

  get paramValue2(): string | null {
    let value = this.get("paramValue2");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramValue2(value: string | null) {
    if (!value) {
      this.unset("paramValue2");
    } else {
      this.set("paramValue2", Value.fromString(<string>value));
    }
  }

  get paramType2(): string | null {
    let value = this.get("paramType2");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramType2(value: string | null) {
    if (!value) {
      this.unset("paramType2");
    } else {
      this.set("paramType2", Value.fromString(<string>value));
    }
  }

  get paramName3(): string | null {
    let value = this.get("paramName3");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramName3(value: string | null) {
    if (!value) {
      this.unset("paramName3");
    } else {
      this.set("paramName3", Value.fromString(<string>value));
    }
  }

  get paramValue3(): string | null {
    let value = this.get("paramValue3");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramValue3(value: string | null) {
    if (!value) {
      this.unset("paramValue3");
    } else {
      this.set("paramValue3", Value.fromString(<string>value));
    }
  }

  get paramType3(): string | null {
    let value = this.get("paramType3");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramType3(value: string | null) {
    if (!value) {
      this.unset("paramType3");
    } else {
      this.set("paramType3", Value.fromString(<string>value));
    }
  }

  get paramName4(): string | null {
    let value = this.get("paramName4");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramName4(value: string | null) {
    if (!value) {
      this.unset("paramName4");
    } else {
      this.set("paramName4", Value.fromString(<string>value));
    }
  }

  get paramValue4(): string | null {
    let value = this.get("paramValue4");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramValue4(value: string | null) {
    if (!value) {
      this.unset("paramValue4");
    } else {
      this.set("paramValue4", Value.fromString(<string>value));
    }
  }

  get paramType4(): string | null {
    let value = this.get("paramType4");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramType4(value: string | null) {
    if (!value) {
      this.unset("paramType4");
    } else {
      this.set("paramType4", Value.fromString(<string>value));
    }
  }

  get paramName5(): string | null {
    let value = this.get("paramName5");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramName5(value: string | null) {
    if (!value) {
      this.unset("paramName5");
    } else {
      this.set("paramName5", Value.fromString(<string>value));
    }
  }

  get paramValue5(): string | null {
    let value = this.get("paramValue5");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramValue5(value: string | null) {
    if (!value) {
      this.unset("paramValue5");
    } else {
      this.set("paramValue5", Value.fromString(<string>value));
    }
  }

  get paramType5(): string | null {
    let value = this.get("paramType5");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramType5(value: string | null) {
    if (!value) {
      this.unset("paramType5");
    } else {
      this.set("paramType5", Value.fromString(<string>value));
    }
  }

  get paramName6(): string | null {
    let value = this.get("paramName6");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramName6(value: string | null) {
    if (!value) {
      this.unset("paramName6");
    } else {
      this.set("paramName6", Value.fromString(<string>value));
    }
  }

  get paramValue6(): string | null {
    let value = this.get("paramValue6");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramValue6(value: string | null) {
    if (!value) {
      this.unset("paramValue6");
    } else {
      this.set("paramValue6", Value.fromString(<string>value));
    }
  }

  get paramType6(): string | null {
    let value = this.get("paramType6");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paramType6(value: string | null) {
    if (!value) {
      this.unset("paramType6");
    } else {
      this.set("paramType6", Value.fromString(<string>value));
    }
  }
}

export class BadgeType extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BadgeType entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BadgeType must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BadgeType", id.toString(), this);
    }
  }

  static load(id: string): BadgeType | null {
    return changetype<BadgeType | null>(store.get("BadgeType", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get ipfs(): string {
    let value = this.get("ipfs");
    return value!.toString();
  }

  set ipfs(value: string) {
    this.set("ipfs", Value.fromString(value));
  }

  get soul(): BigInt {
    let value = this.get("soul");
    return value!.toBigInt();
  }

  set soul(value: BigInt) {
    this.set("soul", Value.fromBigInt(value));
  }

  get linkingParam(): string {
    let value = this.get("linkingParam");
    return value!.toString();
  }

  set linkingParam(value: string) {
    this.set("linkingParam", Value.fromString(value));
  }

  get baseMetric(): Array<string> | null {
    let value = this.get("baseMetric");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set baseMetric(value: Array<string> | null) {
    if (!value) {
      this.unset("baseMetric");
    } else {
      this.set("baseMetric", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class BadgeMetricLookup extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BadgeMetricLookup entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BadgeMetricLookup must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BadgeMetricLookup", id.toString(), this);
    }
  }

  static load(id: string): BadgeMetricLookup | null {
    return changetype<BadgeMetricLookup | null>(
      store.get("BadgeMetricLookup", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get badge(): string {
    let value = this.get("badge");
    return value!.toString();
  }

  set badge(value: string) {
    this.set("badge", Value.fromString(value));
  }

  get baseMetric(): string {
    let value = this.get("baseMetric");
    return value!.toString();
  }

  set baseMetric(value: string) {
    this.set("baseMetric", Value.fromString(value));
  }
}

export class UserBadge extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserBadge entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserBadge must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserBadge", id.toString(), this);
    }
  }

  static load(id: string): UserBadge | null {
    return changetype<UserBadge | null>(store.get("UserBadge", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get badge(): string {
    let value = this.get("badge");
    return value!.toString();
  }

  set badge(value: string) {
    this.set("badge", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get vanityValue(): Bytes {
    let value = this.get("vanityValue");
    return value!.toBytes();
  }

  set vanityValue(value: Bytes) {
    this.set("vanityValue", Value.fromBytes(value));
  }

  get vanityName(): Bytes {
    let value = this.get("vanityName");
    return value!.toBytes();
  }

  set vanityName(value: Bytes) {
    this.set("vanityName", Value.fromBytes(value));
  }
}

export class BaseMetric extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BaseMetric entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BaseMetric must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BaseMetric", id.toString(), this);
    }
  }

  static load(id: string): BaseMetric | null {
    return changetype<BaseMetric | null>(store.get("BaseMetric", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get transactionMetadata(): string {
    let value = this.get("transactionMetadata");
    return value!.toString();
  }

  set transactionMetadata(value: string) {
    this.set("transactionMetadata", Value.fromString(value));
  }

  get params(): string | null {
    let value = this.get("params");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set params(value: string | null) {
    if (!value) {
      this.unset("params");
    } else {
      this.set("params", Value.fromString(<string>value));
    }
  }
}

export class EventType extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EventType entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EventType must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EventType", id.toString(), this);
    }
  }

  static load(id: string): EventType | null {
    return changetype<EventType | null>(store.get("EventType", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get eventCounter(): BigInt {
    let value = this.get("eventCounter");
    return value!.toBigInt();
  }

  set eventCounter(value: BigInt) {
    this.set("eventCounter", Value.fromBigInt(value));
  }

  get baseMetrics(): Array<string> | null {
    let value = this.get("baseMetrics");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set baseMetrics(value: Array<string> | null) {
    if (!value) {
      this.unset("baseMetrics");
    } else {
      this.set("baseMetrics", Value.fromStringArray(<Array<string>>value));
    }
  }

  get smartContract(): string | null {
    let value = this.get("smartContract");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set smartContract(value: string | null) {
    if (!value) {
      this.unset("smartContract");
    } else {
      this.set("smartContract", Value.fromString(<string>value));
    }
  }
}

export class ReputationSource extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ReputationSource entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ReputationSource must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ReputationSource", id.toString(), this);
    }
  }

  static load(id: string): ReputationSource | null {
    return changetype<ReputationSource | null>(
      store.get("ReputationSource", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get type(): string | null {
    let value = this.get("type");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set type(value: string | null) {
    if (!value) {
      this.unset("type");
    } else {
      this.set("type", Value.fromString(<string>value));
    }
  }
}

export class SmartContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SmartContract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SmartContract must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SmartContract", id.toString(), this);
    }
  }

  static load(id: string): SmartContract | null {
    return changetype<SmartContract | null>(store.get("SmartContract", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get startBlock(): BigInt {
    let value = this.get("startBlock");
    return value!.toBigInt();
  }

  set startBlock(value: BigInt) {
    this.set("startBlock", Value.fromBigInt(value));
  }

  get network(): string {
    let value = this.get("network");
    return value!.toString();
  }

  set network(value: string) {
    this.set("network", Value.fromString(value));
  }

  get chain(): string {
    let value = this.get("chain");
    return value!.toString();
  }

  set chain(value: string) {
    this.set("chain", Value.fromString(value));
  }

  get reputationSource(): string {
    let value = this.get("reputationSource");
    return value!.toString();
  }

  set reputationSource(value: string) {
    this.set("reputationSource", Value.fromString(value));
  }
}
