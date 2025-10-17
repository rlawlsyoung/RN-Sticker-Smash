# 🎨 Sticker Smash

사진에 재미있는 스티커를 붙여 나만의 특별한 이미지를 만들어보세요!

## 📱 소개

**Sticker Smash**는 [Expo](https://expo.dev/) Docs에 있는 튜토리얼을 변형시킨 프로젝트입니다. 개인적으로 선호하는 스택인 Tailwind & shadcn/ui의 RN버전인 nativewind & ReactNativeReusables를 사용하여 조금 변형하여 진행해보았습니다. 사용자가 선택한 사진에 다양한 이모지 스티커를 추가하고, 드래그, 크기 조절 등의 인터랙션을 통해 재미있는 이미지를 만들 수 있습니다.

### ✨ 주요 기능

- 📷 **사진 선택**: 갤러리에서 원하는 이미지를 불러오기
- 🎭 **스티커 추가**: 6가지 다양한 이모지 스티커 제공
- ✋ **드래그 앤 드롭**: 스티커를 원하는 위치로 자유롭게 이동
- 🔍 **크기 조절**: 더블 탭으로 스티커 크기 변경 (2배 확대/축소)
- 💾 **이미지 저장**: 완성된 작품을 갤러리에 저장 또는 다운로드
- 🌍 **다국어 지원**: 한국어, 영어, 일본어 지원
- 📱 **크로스 플랫폼**: iOS, Android, Web에서 모두 동작

## 🛠 기술 스택

- **프레임워크**: [Expo](https://expo.dev/) v54 (New Architecture 활성화)
- **라우팅**: [Expo Router](https://expo.dev/router) v6 (파일 기반 라우팅)
- **UI 스타일링**: [NativeWind](https://www.nativewind.dev/) v4 (Tailwind CSS)
- **애니메이션**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) v4
- **제스처**: [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) v2
- **이미지 처리**:
  - [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
  - [expo-media-library](https://docs.expo.dev/versions/latest/sdk/media-library/)
  - [react-native-view-shot](https://github.com/gre/react-native-view-shot)
- **다국어**: [expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/)
- **UI 컴포넌트**: [React Native Reusables](https://reactnativereusables.com)
- **아이콘**: [Lucide React Native](https://lucide.dev/)

## 📂 프로젝트 구조

```
sticker-smash/
├── app/                          # Expo Router 기반 라우팅
│   ├── _layout.tsx              # 루트 레이아웃
│   ├── +html.tsx                # 웹 HTML 템플릿
│   ├── +not-found.tsx           # 404 페이지
│   └── (tabs)/                  # 탭 네비게이션 그룹
│       ├── _layout.tsx          # 탭 레이아웃
│       ├── index.tsx            # 홈 화면 (메인 기능)
│       └── about/
│           └── index.tsx        # 정보 화면
├── assets/
│   └── images/                  # 이미지 리소스 (배경, 이모지 등)
├── components/                  # 재사용 가능한 컴포넌트
│   ├── Button.tsx              # 기본 버튼
│   ├── CircleButton.tsx        # 원형 버튼 (스티커 추가)
│   ├── EmojiList.tsx           # 이모지 목록
│   ├── EmojiPicker.tsx         # 이모지 선택 모달
│   ├── EmojiSticker.tsx        # 드래그 가능한 스티커
│   ├── ImageViewer.tsx         # 이미지 뷰어
│   ├── LanguageSelector.tsx    # 언어 선택기
│   └── ui/                     # UI 프리미티브 컴포넌트
│       ├── button.tsx
│       ├── icon.tsx
│       ├── IconButton.tsx
│       └── text.tsx
├── lib/                        # 유틸리티 및 설정
│   ├── theme.ts               # 테마 설정
│   ├── utils.ts               # 헬퍼 함수
│   └── i18n/                  # 다국어 지원
│       ├── i18n.ts            # i18n 설정
│       ├── LanguageContext.tsx # 언어 컨텍스트
│       ├── types.ts           # 타입 정의
│       └── locales/           # 번역 파일
│           ├── ko.ts          # 한국어
│           ├── en.ts          # 영어
│           └── ja.ts          # 일본어
├── app.json                   # Expo 설정
├── package.json              # 의존성 관리
├── tailwind.config.js        # Tailwind CSS 설정
└── tsconfig.json            # TypeScript 설정
```

## 🚀 시작하기

### 사전 요구사항

- Node.js 18 이상
- npm, yarn, pnpm 또는 bun
- iOS 개발을 위한 Xcode (Mac만 해당)
- Android 개발을 위한 Android Studio

### 설치 및 실행

1. **의존성 설치**

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
# 또는
bun install
```

2. **개발 서버 실행**

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

3. **플랫폼별 실행**

개발 서버가 시작되면 다음 키를 눌러 각 플랫폼에서 앱을 실행할 수 있습니다:

- **iOS**: `i` 키를 눌러 iOS 시뮬레이터 실행 _(Mac 전용)_
- **Android**: `a` 키를 눌러 Android 에뮬레이터 실행
- **Web**: `w` 키를 눌러 브라우저에서 실행

또는 [Expo Go](https://expo.dev/go) 앱으로 QR 코드를 스캔하여 실제 기기에서 바로 테스트할 수 있습니다.

## 💡 사용 방법

1. **사진 선택**: "사진 선택하기" 버튼을 눌러 갤러리에서 이미지를 선택합니다.
2. **스티커 추가**: 중앙의 `+` 버튼을 눌러 원하는 이모지 스티커를 선택합니다.
3. **스티커 조작**:
   - **이동**: 스티커를 드래그하여 원하는 위치로 이동
   - **크기 조절**: 스티커를 더블 탭하여 크기 변경
4. **저장**: "저장" 버튼을 눌러 완성된 이미지를 저장합니다.
5. **초기화**: "초기화" 버튼으로 스티커를 제거하고 다시 시작합니다.

## 🎯 핵심 기능 구현

### 드래그 앤 드롭

`react-native-gesture-handler`의 `Pan` 제스처를 사용하여 스티커를 자유롭게 이동할 수 있습니다.

```typescript
const drag = Gesture.Pan().onChange((event) => {
  translateX.value += event.changeX;
  translateY.value += event.changeY;
});
```

### 크기 조절

더블 탭 제스처로 스티커 크기를 2배로 확대하거나 원래 크기로 축소합니다.

```typescript
const doubleTap = Gesture.Tap()
  .numberOfTaps(2)
  .onStart(() => {
    if (scaleImage.value !== imageSize * 2) {
      scaleImage.value = scaleImage.value * 2;
    } else {
      scaleImage.value = Math.round(scaleImage.value / 2);
    }
  });
```

### 이미지 저장

- **모바일**: `react-native-view-shot`으로 화면을 캡처하여 갤러리에 저장
- **웹**: `dom-to-image`로 DOM을 이미지로 변환하여 다운로드

## 🌐 다국어 지원

앱은 사용자의 기기 언어를 자동으로 감지하여 적절한 언어로 표시됩니다. 지원 언어:

- 🇰🇷 한국어 (ko)
- 🇺🇸 영어 (en)
- 🇯🇵 일본어 (ja)

언어는 앱 내에서도 변경할 수 있으며, 선택한 언어는 AsyncStorage에 저장됩니다.

## 🔧 추가 컴포넌트 설치

React Native Reusables CLI를 사용하여 더 많은 재사용 가능한 컴포넌트를 추가할 수 있습니다:

```bash
npx @react-native-reusables/cli@latest add [...컴포넌트명]
```

예시:

```bash
npx @react-native-reusables/cli@latest add input textarea switch
```

컴포넌트명을 지정하지 않으면 대화형으로 선택할 수 있으며, `--all` 플래그를 사용하면 모든 컴포넌트를 한 번에 설치할 수 있습니다.

## 🤝 기여하기

이 프로젝트는 학습 및 실험 목적으로 만들어졌습니다. 이슈나 풀 리퀘스트를 통해 자유롭게 개선 사항을 제안해주세요!

## 📄 라이선스

이 프로젝트는 개인 학습용 프로젝트입니다.
