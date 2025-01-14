---
sidebar_position: 20
sidebar_label: 19. 리팩토링
---

# 🌈 Chapter 19: 리팩토링

- 본질적인 방법에서는 실제로 작동하는 소프트웨어을 위해 일정한 속도를 유지해야 한다.
- 하지만 개발 속도는 일정하지 않다.
- 동등한 난이도의 작업이어도 개발 속도는 불규칙해질 수 있다. 불규칙한 속도가 점점 더 잦아진다면 개발 속도가 떨어지는 것을 피할 수 없다.
- 불규칙한 속도는 악영향을 끼친다. 계획을 짜는 데 지장을 주니 더 문제이다.
- 설상가상으로 더 많은 결함을 보게 된다. 하지만 **최악은 일정에 맞추어 최상품을 배포하는 과정 자체가 위험에 처하게 되는 것이다.**

### 📚 좁고 구불구불한 길
- 피처를 개발하는 데 걸리는 시간을 계산하려면 크게 두 가지를 고려해야 한다.
- 첫 번째는 **내재적 어려움**(inherent difficulty), 두 번째는 **돌발적 어려움**(accidental difficulty)이다.
- 돌발적 어려움은 기존에 있던 코드에 새로운 코드를 넣을 때 발생할 수 있는 어려움을 말한다.
- 개발팀은 내재적 어려움은 잘 예측한다. 그러나 속도는 불규칙하게, 느리게 만드는 것은 돌발적인 어려움이다. 돌발적인 어려움은 **나쁜 코드**라고 부르기도 한다.
- 코드의 품질이 떨어지는 것을 허용한다면, 일부 피처는 올바른 위치에 쉽게 붙일 수 있다.
- 하지만 어떤 피처는 나쁜 코드 속 구불구불한 길을 따라 얽히게 될 것인데 비슷한 난이도의 피처지만 개발에 걸리는 시간은 완전히 달라진다.
- 속도를 유지하려면 좁고 구불구불한 길을 만들지 말아야 한다. 그리고 피처를 만들 때는 이런 길을 정리해야 한다.

### 📚 리팩토링은 길을 정돈하는 작업입니다.
- 우리는 속도를 늦추고 좁고 구불구불한 길을 만들지 않도록 노력해야 하고 이런 길이 불쑥 나타난다면 **그 즉시 바로잡아야 한다.**
- 나쁜 개발은 눈치채기 어렵다. 외부에서도 볼 수 없다.
- 하지만 경영진 입장에서는 올바른 개발이 필요하다. 우리는 개발팀이 코드를 깨끗하게 유지하길 기대하고 그렇게 하도록 요구해야 한다.
- 속도가 불규칙하거나 늦어진다면 다시 한 번 코드를 정리하는 데 전력을 다해야 할 때고 이 말은 곧 압박을 완화해야 할 때가 왔다는 뜻이기도 하다.

### 📚 모든 길이 전부 구불거린다면 무엇을 해야 할까요?
- 일반적으로 제품의 큰 부분부터 시작하는 것은 좋지 않다.
- 코드를 깔끔하게 만들기 위해서 피처 개발을 전체적으로 중단하는 일도 좋은 생각이 아니다.
- 가장 훌륭한 개발 방법은 **야영지 규칙**(Campground Rule)을 따른다.
- 야영지는 그곳을 발견했을 때보다 떠날 때 더 나은 곳이여야 한다는 규칙이다.
- 피처를 **추가할 때마다** 주변 코드를 깔끔하게 정리하면서 시작해야 한다. 완벽할 필요는 없고 피처가 쉽게 자리 잡을 정도면 충분하다.
- 피처가 **작동한 이후**에는 코드를 정리해야 한다. (자주할수록 좋다.)
- 피처를 적게 추가하는 구역은 그만큼 적은 약의 코드를 정리하니 속도를 떨어뜨리지 않는다.
- 피처를 많이 추가하는 구역은 그 만큼 많이 관심을 끌게 되므로 코드를 빠르게 정리할 수 있다.
