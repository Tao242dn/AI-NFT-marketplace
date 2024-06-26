import React, { useState } from 'react';
import './item.css'
import creator from '../../assets/seller2.png'
import { useParams } from 'react-router-dom';
import { useWallet } from '@suiet/wallet-kit'
//import { TransactionBlock } from "@mysten/sui.js";

const mapping = {
  0: { targetId: "0", name: "Abstract Smoke Red", imgAddress: "https://github.com/kasim393/NFT-Marketplace-UI/blob/main/src/assets/bids1.png?raw=true" },
  1: { targetId: "1", name: "Mountain Landscape", imgAddress: "https://github.com/kasim393/NFT-Marketplace-UI/blob/main/src/assets/bids2.png?raw=true" },
  2: { targetId: "2", name: "Paint Colour on Wall", imgAddress: "https://github.com/kasim393/NFT-Marketplace-UI/blob/main/src/assets/bids3.png?raw=true" },
  3: { targetId: "3", name: "Abstract Pattern", imgAddress: "https://github.com/kasim393/NFT-Marketplace-UI/blob/main/src/assets/bids4.png?raw=true" },
  4: { targetId: "4", name: "White Line Grafiti", imgAddress: "https://github.com/kasim393/NFT-Marketplace-UI/blob/main/src/assets/bids5.png?raw=true" },
  5: { targetId: "5", name: "Abstract Triangle", imgAddress: "https://github.com/kasim393/NFT-Marketplace-UI/blob/main/src/assets/bids6.png?raw=true" },
  6: { targetId: "6", name: "Lake Landscape", imgAddress: "https://github.com/kasim393/NFT-Marketplace-UI/blob/main/src/assets/bids7.png?raw=true" },
  7: { targetId: "7", name: "Blue Red Art", imgAddress: "https://github.com/kasim393/NFT-Marketplace-UI/blob/main/src/assets/bids8.png?raw=true" },
};
const Item = () => {
  let id = useParams().id;
  console.log("id", id);
  const wallet = useWallet();
  console.log('wallet status', wallet.status)
  console.log('connected wallet name', wallet.name)
  console.log('connected account info', wallet.account)
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const disableButton = () => {
    setButtonDisabled(true);
    console.log("state", isButtonDisabled);
  };

  const enableButton = () => {
    setButtonDisabled(false);
  };

  const handleOnClick = () => {
    let targetId = mapping[id].targetId;
    let address = wallet.account?wallet.account.address:"";
    console.log("buying", targetId, address);

    // let tx = new TransactionBlock();
    // let kioskArg = tx.object('<ID>');
    // let capArg = tx.object('<ID>');
    // let itemId = tx.pure.address('<ID>');
    // let itemType = 'ITEM_TYPE';
    //delist(tx, itemType, kioskArg, capArg, itemId);

    disableButton();
    return;
  }
  return (
    <div className='item section__padding'>
      <div className="item-image">
        <img src={mapping[id].imgAddress} alt="item" />
      </div>
      <div className="item-content">
        <div className="item-content-title">
          <h1>{mapping[id].name}</h1>
          <p><span>100 SUI (transfer fee: 1%) </span> ‧ 20 of 25 available</p>
        </div>
        <div className="item-content-creator">
          <div><p>Creater</p></div>
          <div>
            <img src={creator} alt="creator" />
            <p>Rian Leon </p>
          </div>
        </div>
        <div className="item-content-detail">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

        </div>
        <div className="item-content-buy">
            {isButtonDisabled &&
              <button style={{ color:'black'  }} onClick={handleOnClick} className="primary-btn">Bought!</button>
            }
            {!isButtonDisabled &&
              <button style={{ color: 'white' }} onClick={handleOnClick} className="primary-btn">Buy For 100 SUI</button>
            }
        </div>
      </div>
    </div>
  )
};

export default Item;
