import { StateMachine } from "./StateMachine";

export abstract class BaseState {
    private _stateMachine: StateMachine;
    private _id: number;

    public get id(): number { return this._id; }

    constructor(stateMachine: StateMachine, id: number) {
        this._stateMachine = stateMachine;
        this._id = id;
    }
    public execute(): void {

    }
    public abstract cleanUp(): void;

    public dispose(): void {
        this._stateMachine = null;
        this.cleanUp();
    }
}