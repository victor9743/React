import LinkButton from "../components/LinkButton";
function ItemList() {
    return (
        <div>
            <h3>Lista</h3>
            <LinkButton to="/newItemList" text="cadastrar item"/>
        </div>
        
    )
}

export default ItemList;