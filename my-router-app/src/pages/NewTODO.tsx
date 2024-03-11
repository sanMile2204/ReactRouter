import TODOForm from "../components/TODOForm";


export default function NewTODO() {
    return (
        <div className="new-container">
            <h1>NEW TODO</h1>
            <section>
                <TODOForm/>
            </section>
        </div>
    )
}