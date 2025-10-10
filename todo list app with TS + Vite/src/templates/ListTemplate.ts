import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void,
}

export default class ListTemplate implements DOMList {

    static instance: ListTemplate = new ListTemplate()

    ul : HTMLUListElement
    private constructor(){
        this.ul = document.getElementById('listItems') as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ``
    }
    
    render(fullList: FullList){
        this.ul.innerHTML = '';
        fullList.list.forEach((item) => {
            const li = document.createElement('li');
            li.className = 'item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = item.id;
            checkbox.checked = item.checked;
            checkbox.addEventListener('change', () => {
            item.checked = !item.checked;
            fullList.save();
            });

            const label = document.createElement('label');
            label.htmlFor = item.id;
            label.textContent = item.item;

            const button = document.createElement('button');
            button.id = item.id + 'btn';
            button.className = 'button';
            button.textContent = 'X';
            button.addEventListener('click', () => {
            fullList.removeItem(item.id);
            this.render(fullList);
            });

            li.append(checkbox, label, button);
            this.ul.append(li);

            document.getElementById(item.id)?.addEventListener('change', () => {
                item.checked = !item.checked
                fullList.save()
            })

        }
    )

    }



}