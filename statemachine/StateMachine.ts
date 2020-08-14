import { BaseState } from "./BaseState";

export abstract class StateMachine {
    private _statesArr: { [key: number]: BaseState; }
    private _currentState: BaseState;
    constructor() {
        this._statesArr = [];
        this.initStates();
    }
    public abstract get states(): (typeof BaseState)[];
    public initStates(): void {
        for (let i = 0; i < this.states.length; i++) {
            const element: (typeof BaseState) = this.states[i];
            this.addState(element, i);
        }
    }

    public addState(stateClass: any, stateId: number): void {
        if (this._statesArr[stateId]) {
            throw new Error("State already defined: " + stateId);
        }
        this._statesArr[stateId] = new stateClass(this, stateId);
    }
    public setState(id: number): void {
        if (this._currentState) {
            this._currentState.cleanUp();
        }
        this._currentState = this._statesArr[id];
        this._currentState.execute();

    }
}