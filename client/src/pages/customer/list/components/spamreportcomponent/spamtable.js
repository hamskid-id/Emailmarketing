import {useSelector } from "react-redux";
import Spinner from "../../../../../components/spinner/spinner";
import { Actions } from "./spamaction";
import { NoData } from "../../../../../components/nodata";
import { DeleteSpamReport } from "../../../../../store/SpamReportedSlice";
import { DeleteBtn } from "../../../template/components/deleteBtn";

export const SpamContainer = () => {
    const spam = useSelector(
        state => state.SpamReported
    )
    if (spam.GetSpamReportedStatus === 'pending') {
        return <Spinner />
    }
    return (
        <>
            <Actions/>
            <div className="w-overflow">
                <table className=" table table-striped table-hover table-bordered table-responsive caption-top mb-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Updated At</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            spam
                                .SpamReported?.map((spam, index) => {
                                    const {
                                        email,
                                        updated_at,
                                        created_at,
                                        id
                                    } = spam
                                    return (
                                        <tr key={index}>
                                            <th scope="row" className="fs-6">{index}</th>
                                            <td className="fs-6">{email}</td>
                                            <td className="fs-6">{
                                                new Date(created_at)
                                                    .toLocaleString()
                                            }
                                            </td>
                                            <td className="fs-6">{
                                                new Date(updated_at)
                                                    .toLocaleString()
                                            }</td>
                                            <td className="fs-6">
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-secondary dropdown-toggle"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        > 
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <DeleteBtn
                                                                status = {spam.deleteSpamStatus}
                                                                deleteFunc ={DeleteSpamReport({id})}
                                                            />
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }
                                )
                        }

                    </tbody>
                </table>
            </div>

            {
                spam
                    .SpamReported?.length === 0 && <NoData/>
            }
        </>
    )
}