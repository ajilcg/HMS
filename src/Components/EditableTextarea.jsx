import TextareaAutosize from 'react-textarea-autosize';
import { Text } from '@react-pdf/renderer';
import compose from '../styles/compose';
const EditableTextarea = ({ className, placeholder, value, onChange, pdfMode, rows, }) => {
    return (<>
      {pdfMode ? (<Text style={compose('span ' + (className ? className : ''))}>{value}</Text>) : (<TextareaAutosize minRows={rows || 1} className={'input1 ' + (className ? className : '')} placeholder={placeholder || ''} value={value || ''} onChange={onChange ? (e) => onChange(e.target.value) : undefined}/>)}
    </>);
};
export default EditableTextarea;
