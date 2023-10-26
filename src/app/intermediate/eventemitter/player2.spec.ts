

import { Player2 } from "./player2";

describe('Player 2 emitter', () => {
    let player: Player2;

    beforeEach(() => player = new Player2());

    it('Should emit an event when a player recieves a damage', () => {
        let newHp = 0;
        
        player.hpChange.subscribe( hp => {
            newHp = hp;
        });

        player.receivesDamage(1000);
        expect(newHp).toBe(0);
    });

    it('Should emit an event when a player recieves a damage and survive if the damage is less than 100', () => {
        let newHp = 0;
        
        player.hpChange.subscribe( hp => newHp = hp );

        player.receivesDamage(50);
        expect(newHp).toBe(50);
    });

});