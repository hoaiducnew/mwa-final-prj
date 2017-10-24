export class Property {
    constructor(public name: string,
                public _id?: string,
                public expectedPrice?: number,
                public facilities?: string,
                public area?: number,
                public type?: string,
                public imagePath?: string,
                public address1?: string,
                public address2?: string,
                public city?: string,
                public state?: string,
                public zip?: number
    ) {}
}