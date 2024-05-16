function solution(friends, gifts) {
  const giftRecords = {};
  const giverList = {};
  const receiverList = {};
  const giftScores = {};
  let maxGift = 0;

  // Process each gift to populate giftRecords, giverList, and receiverList
  gifts.forEach((gift) => {
      const [giver, receiver] = gift.split(" ");

      giftRecords[giver] = giftRecords[giver] || { gave: 0, received: 0 };
      giftRecords[giver].gave += 1;

      giftRecords[receiver] = giftRecords[receiver] || { gave: 0, received: 0 };
      giftRecords[receiver].received += 1;

      if (!giverList[giver]) {
          giverList[giver] = {};
      }
      giverList[giver][receiver] = (giverList[giver][receiver] || 0) + 1;

      if (!receiverList[receiver]) {
          receiverList[receiver] = {};
      }
      receiverList[receiver][giver] = (receiverList[receiver][giver] || 0) + 1;
  });

  // Calculate gift scores for each person
  for (const name in giftRecords) {
    const numberGiven = giftRecords[name].gave;
    const numberReceived = giftRecords[name].received;
    const score = numberGiven - numberReceived;
    giftScores[name] = score;
  }

  // Add friends who did not join the gifting
  friends.forEach((name) => {
    if (!giftRecords[name]) {
      giftRecords[name] = { gave: 0, received: 0 };
      giftScores[name] = 0;
    }
  });

  // Calculate the maximum number of additional gifts that can be given
  for (const giver in giverList) {
      const receiversInfo = giverList[giver];
      const receivers = Object.keys(receiversInfo);
      const givers = Object.keys(receiverList[giver] || {});
      let giftNumber = 0;

      for (const receiver in receiversInfo) {
          const giftGiven = receiversInfo[receiver];
          const giftReceived = receiverList[giver]?.[receiver] || 0;

          if (giftReceived === giftGiven) {
            const friendGiftScore = giftScores[receiver];
            const myGiftScore = giftScores[giver];

            if (friendGiftScore < myGiftScore) {
              giftNumber += 1;
            }
          }

          if (giftReceived < giftGiven) {
            giftNumber += 1;
          }
      }

      friends.forEach((friend) => {
        if (friend === giver || receivers.includes(friend) || givers.includes(friend)) {
          return;
        }

        const friendGiftScore = giftScores[friend];
        const myGiftScore = giftScores[giver];

        if (friendGiftScore < myGiftScore) {
          giftNumber += 1;
        }
      });

      if (maxGift < giftNumber) {
        maxGift = giftNumber;
      }
  }

  return maxGift;
}
