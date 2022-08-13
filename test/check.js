function check1(str) {
  const alphabets = str.split('');

  const getMinimumIndex = () => {
    const minAsciiNumber = alphabets[0].charCodeAt(0);
    let targetIndex = 0;
    for (let i = 1; i < alphabets.length; i++) {
      if (minAsciiNumber < alphabets[i].charCodeAt(0)) {
        targetIndex = i;
      }
    }
    return targetIndex;
  };

  console.log('getMinimumIndex:', getMinimumIndex());
}

check1('hot'); // ho
check1('acb'); // ab
check1('codility'); // cdility
check1('aaaa'); // aaa

function check2(T, R) {
  const groupMap = new Map();
  let point = 0;
  for (let i = 0; i < T.length; i++) {
    const chars = T[i].split('');
    const numberIndex = chars.findIndex(c => Number.isInteger(Number(c)));
    let group = '';
    for (let j = 0; j <= numberIndex; j++) {
      group += chars[j];
    }

    if (!groupMap.has(group)) {
      groupMap.set(group, 0);
    }

    if (R[i] === 'OK') {
      groupMap.set(group, groupMap.get(group) + 1);
    }
  }
  console.log(groupMap);
}

check2(
  ['test1a', 'test2', 'test1b', 'test1c', 'test3'],
  ['Wrong answer', 'OK', 'Runtime', 'OK', 'Time limit exceeded']
);

check2(
  ['codility1', 'codility3', 'codility2', 'codility4b', 'codility4a'],
  ['Wrong answer', 'OK', 'OK', 'Runtime error', 'OK']
);
