import Form from './Form'
import Table from './Table'


export default function Main(props) {

    return (

        <main className="flex flex-col items-center justify-center">

            <Form handler={props.submitHandler} />
            <Table formData={props.formData} />

        </main>

    )
}