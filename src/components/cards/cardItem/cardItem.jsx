import { NumericFormat } from 'react-number-format';
import './cardItem.css';

export default function CardItem(props) {
  const { id, jumlahCoin, jenisCoin, hargaCoin, onChange } = props;
  return (
    <label class="input-container" for={id} id={id} key={id} onChange={onChange}>
      <input id={id} value={id} type="radio" name="radio" />
      <div class="radio-tile">
        <div className="itemcoin">
          {jumlahCoin} {jenisCoin}{' '}
        </div>
        <label for={id}>
          {' '}
          <NumericFormat value={hargaCoin} prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator="," />
        </label>
      </div>
    </label>
  );
}
