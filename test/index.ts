import { StateMachineClasses } from '../index'

// create need states
class IdleState extends StateMachineClasses.BaseState {
    public execute(): void {
        console.log("Idle State");
    }
    public cleanUp(): void {
    }
}
class WinState extends StateMachineClasses.BaseState {
    public execute(): void {
        console.log("WinState State");
    }
    public cleanUp(): void {
    }
}
// create concrete state machine class 
class StateMachine extends StateMachineClasses.StateMachine {
    public get states(): (typeof StateMachineClasses.BaseState)[] {
        return [
            IdleState,
            WinState
        ]
    }
}

// create instance, and change states
let stateMachine: StateMachine = new StateMachine();
stateMachine.setState(0);
stateMachine.setState(1);