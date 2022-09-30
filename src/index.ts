/*------------------------------
* DOM取得
----------------------------------*/
const ballElement = document.querySelectorAll<HTMLElement>(".ball");
/*------------------------------
* 各セッティング
----------------------------------*/

const ballSetting = {
  x: 0,
  y: 0,
  size: 90,
  r: Math.random() * 255,
  g: Math.random() * 255,
  b: Math.random() * 255,
};

const animationSetting = {
  interval: 0,
  speed: 500,
};

/*------------------------------
* 処理定義
----------------------------------*/
function render(): void {
  _styleInit();
  _ballMove();
  window.addEventListener("resize", () => {
    _styleInit();
    _ballMove();
  });
}
render();

function _styleInit(): void {
  //x,y軸に中央
  ballSetting.x = window.innerWidth * 0.5 - ballSetting.size * 0.5;
  ballSetting.y = window.innerHeight * 0.5 - ballSetting.size * 0.5;
  //各ボールにスタイリングを適用
  let win = window.innerWidth;
  for (let i = 0; i < ballElement.length; i++) {
    ballElement[i].style.left = `${ballSetting.x}px`;
    ballElement[i].style.top = `${ballSetting.y}px`;
    ballElement[i].style.background = `rgb(${ballSetting.r},${ballSetting.g},${ballSetting.b})`;

    if (win >= 768) {
      ballElement[i].style.width = `${ballSetting.size}px`;
      ballElement[i].style.height = `${ballSetting.size}px`;
    } else {
      ballElement[i].style.width = `calc(${ballSetting.size}px / 2)`;
      ballElement[i].style.height = `calc(${ballSetting.size}px / 2)`;
    }
  }
}

function _timeInit(center: number, speed: number) {
  const centerLength: number = center; //中心点
  const radius: number = 3000; //半径
  const time: number = new Date().getTime() / speed;
  const x: number = (centerLength + Math.cos(time) * radius) / 10;
  const y: number = (centerLength + Math.sin(time) * radius) / 10;
  return [x, y];
}

function _ballMove(): void {
  let [x, y]: number[] = _timeInit(animationSetting.interval, animationSetting.speed);
  let [x02, y02]: number[] = _timeInit(animationSetting.interval, animationSetting.speed / 1.2);
  let [x03, y03]: number[] = _timeInit(animationSetting.interval, animationSetting.speed / 1.4);
  let [x04, y04]: number[] = _timeInit(animationSetting.interval, animationSetting.speed / 1.6);
  let [x05, y05]: number[] = _timeInit(animationSetting.interval, animationSetting.speed / 1.8);
  let [x06, y06]: number[] = _timeInit(animationSetting.interval, animationSetting.speed / 2.0);
  let [x07, y07]: number[] = _timeInit(animationSetting.interval, animationSetting.speed / 2.2);

  ballElement[0].style.transform = `translate(calc(${x05}px * 1.2),calc(${y05}px * 1.2))`;
  ballElement[1].style.transform = `translate(calc(${x}px),calc(${y02}px)`;
  ballElement[2].style.transform = `translate(calc(${x02}px * 0.8),calc(${y02}px * 0.8))`;
  ballElement[3].style.transform = `translate(calc(${x}px * 0.6),calc(${y03}px * 0.6))`;
  ballElement[4].style.transform = `translate(calc(${x}px * 0.4),calc(${y06}px * 0.4))`;
  ballElement[5].style.transform = `translate(calc(${x07}px * 0.2),calc(${y07}px * 0.2))`;

  requestAnimationFrame(_ballMove);
}
