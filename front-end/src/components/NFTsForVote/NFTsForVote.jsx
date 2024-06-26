import React, { useState } from 'react';
import { Bids } from './Bid'; // Import Bids component

const NFTsForVote = () => {
  const [dataWithVote functionality] = useState( /* filtered and vote logic */ );

  return (
    <div className="nfts-for-vote-content">
      <Bids title="NFT for Vote (Trạng thái 1)" data={dataWithVoteFunctionality} />
    </div>
  );
};

export default NFTsForVote;
