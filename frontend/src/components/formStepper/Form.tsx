import { useState } from "react"
import { Email } from "./Email"
import { newPass } from "./newPass"
import { Validate } from "./Validate"
export default function PassChangeForm() {
    const [page, setPage] = useState(0)
    const Steps = [<Email setting={setPage}/>, <newPass setting={setPage}/>, <Validate setting={setPage}/>]
    return <>
        <form>
            <h1>Récupérez votre mot de pass</h1>
            <div>{Steps[page]}</div>
        </form>
    </>
}