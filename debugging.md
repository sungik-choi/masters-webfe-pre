# NodeJS와 개발환경

NodeJS 는 모듈 시스템을 사용한다. `module`은 파일과 1대1의 대응관계를 가지며, 하나의 모듈은 자신만의 독립적인 실행영역`scope`를 가지게 된다. 모듈은 `module.export` 또는 `exports` 객체를 통해 정의하고 외부로 공개한다. 공개된 모듈은 `require`함수를 사용하여 import 한다. `exports`객체는 프로퍼티 또는 메소드를 여러 개 정의할 수 있다. 하지만 `module.export`에는 하나의 값(원시타입, 함수, 객체)만을 할당할 수 있다.

모듈은 독립적인 파일 스코프를 갖기 때문에 모듈안에 선언한 모든 것들은 기본적으로 해당 모듈 내부에서만 참조 가능하다. 만약 모듈 안에 선언한 항목을 외부에 공개하여 다른 모듈들이 사용할 수 있게 하고 싶다면 `exports`객체를 사용해야 한다.모듈은 파일로 작성하고 외부에 공개할 대상을 `exports`객체의 프로퍼티 또는 메소드로 정의한다. 그리고 모듈을 전역함수 `require()`를 이용하여 추출한다.

## Breakpoint 란

**중단점**이라고도 한다. 디버깅 시 특정 라인을 breakpoint로 지정하면, 해당 라인 직전까지 코드를 실행한다.

## Watch 사용법

**조사식**이라고도 한다. 디버깅 시 여러 변수들을 한번에 확인할 수 있다.

[VScode Debugging](https://code.visualstudio.com/docs/editor/debugging)

![조사식 창](./img/watch.png)

## Call stack 의 의미

자바스크립트에서는 함수를 실행하면, 해당 함수의 기록을 Stack의 맨위에 추가한다. (접시를 쌓듯이) **Push**  
함수 결과값을 반환하면 Stack에 쌓인 함수는 제거된다. **Pop**

## Step over / Step into / Step out

[What is the difference between Step in, Step out and Step Over?](https://stackoverflow.com/questions/52368009/what-is-the-difference-between-step-in-step-out-and-step-over)

- Step Over(단위 실행): 다음 줄에 나오는 명령을 실행하고 다음 줄로 점프합니다. (다음 줄에 함수 호출이 있다면 해당 함수로 들어가지 않고, 바로 다음 줄로 점프: `Step Into`와 다른 점)

- Step Into(단계 정보): 다음 줄에 함수 호출이 포함되어 있다면 Step Into는 해당 함수로 점프하고 첫 줄에서 멈춥니다. 보통 한줄씩 실행할 때 사용.

- Step Out(단계 출력): 현재 함수의 나머지 부분을 실행한 다음, 함수 호출 뒤 다음 명령문(중단점)에서 일시 중지합니다.
