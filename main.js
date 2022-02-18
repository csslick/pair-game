const stageData = [
  1,1,2,2,3,3,
  4,4,5,5,6,6,
  7,7,8,8,9,9
];

function updatestageData() {
  let check_count = 0;  // 배열값이 모드 클리어?

  $('#game').empty();
  stageData.forEach(n => {
    let html = `<div class='box'>${n}</div>`;
    $('#game').append(html);
    if(n == '') check_count++;
  })
  
  // 게임클리어 채크
  if(check_count == stageData.length) {
    console.log('게임 클리어');
    return;
  }
}

updatestageData();

let prevVal = '', preIndex = null;
let currentVal = '', currenIndex = null;

$(document).on('click', '#game .box', function(){
  currentVal = $(this).text();  // 현재값
  currenIndex = $(this).index();
  console.log(currentVal, prevVal);
  if(currentVal == prevVal) {
    // 짝이면 제거
    stageData[preIndex] = '';
    stageData[currenIndex] = '';
    updatestageData();
  }
  prevVal = currentVal; // 현재값 이전값에 기록
  preIndex = currenIndex;
  // stageData[$(this).index()] = '';
  updatestageData();
})
