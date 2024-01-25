import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetAccountQuery } from "../auth/AuthSlice";
import { useGetContactsQuery } from "./slices/ContactSlice";
import Contacts from "./Contacts";

export default function MyAccount() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetAccountQuery(id);
    // const { data2 } = useGetContactsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Oh no... {error}</div>;
    }

    return (
        <div className="myAccountDiv">
    <table>
        <tbody>
        <tr className="userDetailsTable">
            <th>Username</th>
            <th>Email</th>
            <th>Name</th>
        </tr>
        <tr>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data.firstName} {data.lastName}</td>
        </tr>
        </tbody>
    </table>
       <Contacts />
        </div>
    )
}