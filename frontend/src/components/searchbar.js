export default function Search(props){
    return(<form className="form">
                     <label  style={{paddingRight:'10px', fontWeight: 'bolder'}}>{props.title} </label>
                     <input type="text" style={{ marginRight:'10px', fontSize:'25px' }} />
                     <button style={{
                        height: '40px',
                        marginLeft: '20px',
                        fontSize: '20px',
                        padding: '5px'
                    }}>Get Details</button>
             </form>
           )
}
