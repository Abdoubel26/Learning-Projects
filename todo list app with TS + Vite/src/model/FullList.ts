import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(item: ListItem): void,
    removeItem(id: string): void,
}

export default class FullList implements List {

    static instance: FullList = new FullList()

    private constructor(private _list: ListItem[] = [] ){}

    get list(): ListItem[] {
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem('AppList')
        if (typeof storedList !== 'string') return
        const parsedList: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList)

        parsedList.forEach((item) => {
            const NewListItem = new ListItem(item._id, item._item, item._checked)
            FullList.instance.addItem(NewListItem)
        })
    }

    save(): void {
        localStorage.setItem('AppList', JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
    }
    
    addItem(item: ListItem): void {
        this._list.push(item)
        this.save()
    }

    removeItem(id: string): void {
        //this._list = this._list.filter(item => item.id !== id)
        const indexToRemove: number = this._list.findIndex(item => item.id === id)
        this._list.splice(indexToRemove, 1)
        this.save
        console.log('removeItem method called!')
    }
}