class Person {
    constructor(options) {
        this.img = options.img
        this.name = options.name
        this.age = options.age
        this.job = options.job
        this.education = options.education
        this.description = options.description
        this.doc = options.doc
    }

    draw() {
        let arr = Object.keys(this)
        for (let i = 0; i < this.doc.length; i++) {
            if (i === 0) {
                this.doc[i].src = this[arr[i]];
            } else {
                this.doc[i].innerHTML += ' ' + this[arr[i]];
            }
            ;
        }
        ;
    }

}

const first = new Person({
    img: 'content/1.jpg',
    name: 'Mursik',
    age: 20,
    job: 'yandex',
    education: 'spbstu',
    description: 'something something something something something something something something something something something something ',
    doc: document.querySelectorAll('.first')
})
const second = new Person({
    img: 'content/2.jpg',
    name: 'Lola',
    age: 12,
    job: 'google',
    education: 'msu',
    description: 'something something something something something something something something ',
    doc: document.querySelectorAll('.second')
})

const third = new Person({
    img: 'content/3.jpg',
    name: 'Ori',
    age: 16,
    job: 'vk',
    education: 'nsu',
    description: 'somethings something something something something something something ',
    doc: document.querySelectorAll('.third')
})
const data = {
    first,
    second,
    third
}

first.draw();
second.draw();
third.draw();