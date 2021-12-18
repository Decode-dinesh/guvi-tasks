class uberPrice {
    constructor(carRent, hour, distance_km) {
        this.carRent = carRent;
        this.hour = hour;
        this.distance_km = distance_km;
    }
    getcarRent() {
        this.carRent = this.carRent;
    }
    getHour() {
        this.hour = this.hour;
    }
    getDistance_km() {
        this.distance_km = this.distance_km;
    }
    getPrice() {
        console.log("Rs ",this.carRent + (this.hour * 200) + (this.distance_km * 20));

    }

}
var fare = new uberPrice(1000, 2, 6);
fare.getPrice();