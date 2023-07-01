import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {
    // common inline approach
    state: () => ({
        name: '',
        spots: 0,
        members: [],
    }),

    // normal approach
    // state() {
    //     return {
    //         name: '',
    //         spots: 0,
    //         members: [],
    //     }
    // },

    actions: {
        // use async for:
        // better optimization: it only trigger this when user visit the view that has this method
        // to remove .then and for cleaner code
        async fill() {
            let result = await import('@/team.json');
            
            // better method to populate state() if state() structure is the same in json
            // dont forget to add $ when calling a state() inside this store file
            this.$state = result.default;
        },

        // custom fuction to add more spots
        grow(spots) {
            this.spots = spots;
        }

        // fill() {
        //     import('@/team.json').then(r => {
        //         //let data = r.default;

        //         // alternative method to populate state()
        //         // this.name = data.name;
        //         // this.spots = data.spots;
        //         // this.members = data.members;

        //         // alternative method to populate state()
        //         // this.patch({
        //         //     name: data.name,
        //         //     spots: data.spots,
        //         //     members: data.members
        //         // });

        //         // better method to populate state() if state() structure is the same in json
        //         this.state = r.default;
        //     });
        // }
    },

    getters: {
        spotsRemaining() {
            let total = this.spots - this.members.length;

            return (total > 0) ? total : 0;
        }
    }
});