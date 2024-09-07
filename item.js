const items =  require('./fakeDb');

class Item {
    constructor(name, price){
        this.name = name
        this.price = price 

        items.push(this)
    }

    static findALl (){
        return items
    }

    static find(name) {

        const item = items.find( value =>  value.name === name ) 

        if(item === undefined){
            throw { message: "Not Found", status: 404 }
        }
        return item
    }

    static update(name, price) {
        const item = Item.find(name)

        if(item === undefined){
            throw { message: "Not Found", status: 404 }
        }

        item.name = name;
        item.price = price 
        return item
    }

    static remove(name) {
        let foundIdx = items.findIndex(v => v.name === name);
        if (foundIdx === -1) {
          throw {message: "Not Found", status: 404}
        }
        items.splice(foundIdx, 1);
    }
}

module.exports = Item