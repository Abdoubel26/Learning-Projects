import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'


function initApp(): void {
    const fullList = FullList.instance
    const template = ListTemplate.instance
    
    const itemEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement

    itemEntryForm.addEventListener("submit",( event: SubmitEvent) => {

        event.preventDefault()  
        const input = document.getElementById('newItem') as HTMLInputElement
        
        
        const idNumber: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length - 1].id) + 1 : 1

        if (input.value.trim() !== ''){
            fullList.addItem(new ListItem(idNumber.toString(), input.value, false))
            template.render(fullList)
        }
        console.log(fullList);
        console.log(template)
        input.value = ''
    })

    const ClearItems = document.getElementById('clearItemsButton')
    ClearItems?.addEventListener('click', () => {
        fullList.clearList()
        template.clear()
    })

    document.getElementById('newItem')?.textContent

    fullList.load()
    template.render(fullList)
}

document.addEventListener('DOMContentLoaded', initApp)