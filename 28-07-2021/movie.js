class movie {
    constructor(title, studio, rating = 'PG'){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    setRating(){
        this.rating;
    }
    getTitle(){
        console.log(this.title);
    }
    getStudio(){
        console.log(this.studio);
    }
    getRating(){
        console.log(this.rating);
    }
}

var res = new movie("NO Time to Die", "Eon Productions", "PG13");
res.getTitle();
res.getStudio();
res.getRating();