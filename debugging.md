# Breakpoint 란?
**중단점**이라고도 한다. 디버깅 시 특정 라인을 breakpoint로 지정하면, 해당 라인 직전까지 코드를 실행한다.

# Watch 사용법
**조사식**이라고도 한다. 디버깅 시 여러 변수들을 한번에 확인할 수 있다.

[VScode Debugging](https://code.visualstudio.com/docs/editor/debugging)

![조사식 창](./img/watch.png)

# Call stack 의 의미
자바스크립트에서는 함수를 실행하면, 해당 함수의 기록을 Stack의 맨위에 추가한다. (접시를 쌓듯이) **Push**

함수 결과값을 반환하면 Stack에 쌓인 함수는 제거된다. **Pop**

# Step over / Step into / Step out
- Step Over(단위 실행): 다음 줄에 나오는 명령을 실행하고 다음 줄로 점프합니다. (다음 줄에 함수 호출이 있다면 해당 함수로 들어가지 않고, 바로 다음 줄로 점프: 'Step Into'와 다른 점)

- Step Into(단계 정보): 다음 줄에 함수 호출이 포함되어 있다면 Step Into는 해당 함수로 점프하고 첫 줄에서 멈춥니다.

- Step Out(단계 출력): 현재 함수의 나머지 부분을 실행한 다음 함수 호출 뒤 다음 명령문에서 일시 중지합니다.