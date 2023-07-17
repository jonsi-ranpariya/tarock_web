import Table from '../UI/Tables'
import { useAvtar } from '../../store/avtar-context';

const Avtar = () => {
  
  let { datarender } = useAvtar();
  console.log('datarender', datarender)
  
  return (
    <Table
      data={datarender}
      rowsPerPage={10}
      header={["Path", "Actions"]}
    />
  );
};

export default Avtar;