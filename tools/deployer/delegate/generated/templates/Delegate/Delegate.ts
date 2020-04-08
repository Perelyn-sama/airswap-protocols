// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProvideOrder extends EthereumEvent {
  get params(): ProvideOrder__Params {
    return new ProvideOrder__Params(this);
  }
}

export class ProvideOrder__Params {
  _event: ProvideOrder;

  constructor(event: ProvideOrder) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tradeWallet(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get senderToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get signerToken(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get senderAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get priceCoef(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get priceExp(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class SetRule extends EthereumEvent {
  get params(): SetRule__Params {
    return new SetRule__Params(this);
  }
}

export class SetRule__Params {
  _event: SetRule;

  constructor(event: SetRule) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get senderToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get signerToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get maxSenderAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get priceCoef(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get priceExp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class UnsetRule extends EthereumEvent {
  get params(): UnsetRule__Params {
    return new UnsetRule__Params(this);
  }
}

export class UnsetRule__Params {
  _event: UnsetRule;

  constructor(event: UnsetRule) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get senderToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get signerToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Delegate__getMaxQuoteResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Delegate__rulesResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class Delegate extends SmartContract {
  static bind(address: Address): Delegate {
    return new Delegate("Delegate", address);
  }

  getMaxQuote(
    senderToken: Address,
    signerToken: Address
  ): Delegate__getMaxQuoteResult {
    let result = super.call("getMaxQuote", [
      EthereumValue.fromAddress(senderToken),
      EthereumValue.fromAddress(signerToken)
    ]);

    return new Delegate__getMaxQuoteResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getMaxQuote(
    senderToken: Address,
    signerToken: Address
  ): CallResult<Delegate__getMaxQuoteResult> {
    let result = super.tryCall("getMaxQuote", [
      EthereumValue.fromAddress(senderToken),
      EthereumValue.fromAddress(signerToken)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Delegate__getMaxQuoteResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  getSenderSideQuote(
    signerAmount: BigInt,
    signerToken: Address,
    senderToken: Address
  ): BigInt {
    let result = super.call("getSenderSideQuote", [
      EthereumValue.fromUnsignedBigInt(signerAmount),
      EthereumValue.fromAddress(signerToken),
      EthereumValue.fromAddress(senderToken)
    ]);

    return result[0].toBigInt();
  }

  try_getSenderSideQuote(
    signerAmount: BigInt,
    signerToken: Address,
    senderToken: Address
  ): CallResult<BigInt> {
    let result = super.tryCall("getSenderSideQuote", [
      EthereumValue.fromUnsignedBigInt(signerAmount),
      EthereumValue.fromAddress(signerToken),
      EthereumValue.fromAddress(senderToken)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getSignerSideQuote(
    senderAmount: BigInt,
    senderToken: Address,
    signerToken: Address
  ): BigInt {
    let result = super.call("getSignerSideQuote", [
      EthereumValue.fromUnsignedBigInt(senderAmount),
      EthereumValue.fromAddress(senderToken),
      EthereumValue.fromAddress(signerToken)
    ]);

    return result[0].toBigInt();
  }

  try_getSignerSideQuote(
    senderAmount: BigInt,
    senderToken: Address,
    signerToken: Address
  ): CallResult<BigInt> {
    let result = super.tryCall("getSignerSideQuote", [
      EthereumValue.fromUnsignedBigInt(senderAmount),
      EthereumValue.fromAddress(senderToken),
      EthereumValue.fromAddress(signerToken)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  indexer(): Address {
    let result = super.call("indexer", []);

    return result[0].toAddress();
  }

  try_indexer(): CallResult<Address> {
    let result = super.tryCall("indexer", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", []);

    return result[0].toBoolean();
  }

  try_isOwner(): CallResult<boolean> {
    let result = super.tryCall("isOwner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", []);

    return result[0].toAddress();
  }

  try_owner(): CallResult<Address> {
    let result = super.tryCall("owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  protocol(): Bytes {
    let result = super.call("protocol", []);

    return result[0].toBytes();
  }

  try_protocol(): CallResult<Bytes> {
    let result = super.tryCall("protocol", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  rules(param0: Address, param1: Address): Delegate__rulesResult {
    let result = super.call("rules", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1)
    ]);

    return new Delegate__rulesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_rules(
    param0: Address,
    param1: Address
  ): CallResult<Delegate__rulesResult> {
    let result = super.tryCall("rules", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Delegate__rulesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  swapContract(): Address {
    let result = super.call("swapContract", []);

    return result[0].toAddress();
  }

  try_swapContract(): CallResult<Address> {
    let result = super.tryCall("swapContract", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  tradeWallet(): Address {
    let result = super.call("tradeWallet", []);

    return result[0].toAddress();
  }

  try_tradeWallet(): CallResult<Address> {
    let result = super.tryCall("tradeWallet", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get delegateSwap(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get delegateIndexer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get delegateContractOwner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get delegateTradeWallet(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get delegateProtocol(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ProvideOrderCall extends EthereumCall {
  get inputs(): ProvideOrderCall__Inputs {
    return new ProvideOrderCall__Inputs(this);
  }

  get outputs(): ProvideOrderCall__Outputs {
    return new ProvideOrderCall__Outputs(this);
  }
}

export class ProvideOrderCall__Inputs {
  _call: ProvideOrderCall;

  constructor(call: ProvideOrderCall) {
    this._call = call;
  }

  get order(): ProvideOrderCallOrderStruct {
    return this._call.inputValues[0].value.toTuple() as ProvideOrderCallOrderStruct;
  }
}

export class ProvideOrderCall__Outputs {
  _call: ProvideOrderCall;

  constructor(call: ProvideOrderCall) {
    this._call = call;
  }
}

export class ProvideOrderCallOrderStruct extends EthereumTuple {
  get nonce(): BigInt {
    return this[0].toBigInt();
  }

  get expiry(): BigInt {
    return this[1].toBigInt();
  }

  get signer(): ProvideOrderCallOrderSignerStruct {
    return this[2].toTuple() as ProvideOrderCallOrderSignerStruct;
  }

  get sender(): ProvideOrderCallOrderSenderStruct {
    return this[3].toTuple() as ProvideOrderCallOrderSenderStruct;
  }

  get affiliate(): ProvideOrderCallOrderAffiliateStruct {
    return this[4].toTuple() as ProvideOrderCallOrderAffiliateStruct;
  }

  get signature(): ProvideOrderCallOrderSignatureStruct {
    return this[5].toTuple() as ProvideOrderCallOrderSignatureStruct;
  }
}

export class ProvideOrderCallOrderSignerStruct extends EthereumTuple {
  get kind(): Bytes {
    return this[0].toBytes();
  }

  get wallet(): Address {
    return this[1].toAddress();
  }

  get token(): Address {
    return this[2].toAddress();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get id(): BigInt {
    return this[4].toBigInt();
  }
}

export class ProvideOrderCallOrderSenderStruct extends EthereumTuple {
  get kind(): Bytes {
    return this[0].toBytes();
  }

  get wallet(): Address {
    return this[1].toAddress();
  }

  get token(): Address {
    return this[2].toAddress();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get id(): BigInt {
    return this[4].toBigInt();
  }
}

export class ProvideOrderCallOrderAffiliateStruct extends EthereumTuple {
  get kind(): Bytes {
    return this[0].toBytes();
  }

  get wallet(): Address {
    return this[1].toAddress();
  }

  get token(): Address {
    return this[2].toAddress();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get id(): BigInt {
    return this[4].toBigInt();
  }
}

export class ProvideOrderCallOrderSignatureStruct extends EthereumTuple {
  get signatory(): Address {
    return this[0].toAddress();
  }

  get validator(): Address {
    return this[1].toAddress();
  }

  get version(): Bytes {
    return this[2].toBytes();
  }

  get v(): i32 {
    return this[3].toI32();
  }

  get r(): Bytes {
    return this[4].toBytes();
  }

  get s(): Bytes {
    return this[5].toBytes();
  }
}

export class RenounceOwnershipCall extends EthereumCall {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetRuleCall extends EthereumCall {
  get inputs(): SetRuleCall__Inputs {
    return new SetRuleCall__Inputs(this);
  }

  get outputs(): SetRuleCall__Outputs {
    return new SetRuleCall__Outputs(this);
  }
}

export class SetRuleCall__Inputs {
  _call: SetRuleCall;

  constructor(call: SetRuleCall) {
    this._call = call;
  }

  get senderToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get signerToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get maxSenderAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get priceCoef(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get priceExp(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class SetRuleCall__Outputs {
  _call: SetRuleCall;

  constructor(call: SetRuleCall) {
    this._call = call;
  }
}

export class SetRuleAndIntentCall extends EthereumCall {
  get inputs(): SetRuleAndIntentCall__Inputs {
    return new SetRuleAndIntentCall__Inputs(this);
  }

  get outputs(): SetRuleAndIntentCall__Outputs {
    return new SetRuleAndIntentCall__Outputs(this);
  }
}

export class SetRuleAndIntentCall__Inputs {
  _call: SetRuleAndIntentCall;

  constructor(call: SetRuleAndIntentCall) {
    this._call = call;
  }

  get senderToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get signerToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get rule(): SetRuleAndIntentCallRuleStruct {
    return this._call.inputValues[2].value.toTuple() as SetRuleAndIntentCallRuleStruct;
  }

  get newStakeAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class SetRuleAndIntentCall__Outputs {
  _call: SetRuleAndIntentCall;

  constructor(call: SetRuleAndIntentCall) {
    this._call = call;
  }
}

export class SetRuleAndIntentCallRuleStruct extends EthereumTuple {
  get maxSenderAmount(): BigInt {
    return this[0].toBigInt();
  }

  get priceCoef(): BigInt {
    return this[1].toBigInt();
  }

  get priceExp(): BigInt {
    return this[2].toBigInt();
  }
}

export class SetTradeWalletCall extends EthereumCall {
  get inputs(): SetTradeWalletCall__Inputs {
    return new SetTradeWalletCall__Inputs(this);
  }

  get outputs(): SetTradeWalletCall__Outputs {
    return new SetTradeWalletCall__Outputs(this);
  }
}

export class SetTradeWalletCall__Inputs {
  _call: SetTradeWalletCall;

  constructor(call: SetTradeWalletCall) {
    this._call = call;
  }

  get newTradeWallet(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTradeWalletCall__Outputs {
  _call: SetTradeWalletCall;

  constructor(call: SetTradeWalletCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends EthereumCall {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnsetRuleCall extends EthereumCall {
  get inputs(): UnsetRuleCall__Inputs {
    return new UnsetRuleCall__Inputs(this);
  }

  get outputs(): UnsetRuleCall__Outputs {
    return new UnsetRuleCall__Outputs(this);
  }
}

export class UnsetRuleCall__Inputs {
  _call: UnsetRuleCall;

  constructor(call: UnsetRuleCall) {
    this._call = call;
  }

  get senderToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get signerToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UnsetRuleCall__Outputs {
  _call: UnsetRuleCall;

  constructor(call: UnsetRuleCall) {
    this._call = call;
  }
}

export class UnsetRuleAndIntentCall extends EthereumCall {
  get inputs(): UnsetRuleAndIntentCall__Inputs {
    return new UnsetRuleAndIntentCall__Inputs(this);
  }

  get outputs(): UnsetRuleAndIntentCall__Outputs {
    return new UnsetRuleAndIntentCall__Outputs(this);
  }
}

export class UnsetRuleAndIntentCall__Inputs {
  _call: UnsetRuleAndIntentCall;

  constructor(call: UnsetRuleAndIntentCall) {
    this._call = call;
  }

  get senderToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get signerToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UnsetRuleAndIntentCall__Outputs {
  _call: UnsetRuleAndIntentCall;

  constructor(call: UnsetRuleAndIntentCall) {
    this._call = call;
  }
}
