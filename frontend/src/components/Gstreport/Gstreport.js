import {columns} from '../Gstreport/Table';
import DataTable from '../DataTable';
function Gstreport() {
    return (
        <div class="Report">
            <DataTable title='GST Report' columns={columns}/>
        </div>
    )
}

export default Gstreport
