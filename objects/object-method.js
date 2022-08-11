let resturant = {
    name: 'ASL',
    guestcapacity: 75,
    guestcount: 0,
    checkavailability: function (partysize) {
        let seatsleft = this.guestcapacity - this.guestcount
        return partysize <= seatsleft
    },
    seatparty: function (partysize) {
        this.guestcount = this.guestcount + this.partysize
    },
    removeparty: function (partysize) {
        this.guestcount = this.guestcount - this.partysize
    }
}

resturant.seatparty(72)
console.log(resturant.checkavailability(4))
resturant.removeparty(5)
console.log(resturant.checkavailability(4))