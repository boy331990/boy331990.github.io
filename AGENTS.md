# Repository Guidelines

## 개요
- 이 저장소는 `Next.js 11` + `React 17` 기반 개인 포트폴리오 사이트입니다.
- 배포 방식은 `next build && next export`를 이용한 정적 export이며, GitHub Pages 배포를 전제로 합니다.
- 실제 화면 구성은 `pages/index.js`가 시작점이고, 대부분의 텍스트/데이터는 `portfolio.js`에서 관리합니다.
- 공통 UI 조각은 `components/`, 섹션 단위 화면은 `containers/`, 전역 스타일은 `styles/`, 정적 자산은 `public/`에 있습니다.

## 디렉터리 구조
- `pages/`: Next.js 라우트와 앱 엔트리. 현재 핵심 파일은 `pages/index.js`, `pages/_app.js`
- `components/`: 카드, 네비게이션, SEO, 소셜 링크 등 재사용 가능한 UI 컴포넌트
- `containers/`: 인사말, 기술 스택, 경력, 프로젝트 등 페이지 섹션 단위 컴포넌트
- `portfolio.js`: 포트폴리오 문구, 링크, 기술 목록, 프로젝트/경력 데이터의 중심 파일
- `styles/`: 전역 CSS와 벤더 스타일
- `public/`: 폰트, 아이콘, 로티 애니메이션, 이미지, `manifest.json`, `robots.txt`
- `out/`: 정적 export 결과물. 소스가 아니라 생성 산출물로 간주

## 작업 원칙
- 수정은 가능한 한 작고 명확하게 유지합니다.
- 기존 코드 스타일과 파일 구조를 존중하고, 불필요한 리팩터링은 하지 않습니다.
- 콘텐츠 변경은 우선 `portfolio.js`를 검토하고, 구조 변경이 필요할 때만 `components/`나 `containers/`를 수정합니다.
- 페이지 조립 순서나 데이터 흐름을 바꿀 때는 `pages/index.js`와 관련 섹션 컴포넌트를 함께 확인합니다.
- 스타일 수정은 먼저 기존 `styles/` 체계를 재사용하고, 새 규칙 추가는 최소화합니다.
- 정적 자산 경로는 export 배포에 영향이 있으므로 `public/` 내부 경로를 함부로 변경하지 않습니다.
- 사용자가 요청한 범위를 넘는 대규모 구조 변경은 먼저 제안하고 승인받은 뒤 진행합니다.
- 버그 수정 시에는 화면에 보이는 증상만이 아니라, 원인이 데이터/컴포넌트/스타일 어디에 있는지 먼저 좁혀서 수정합니다.
- placeholder 데이터, 더미 문구, 샘플 링크가 남아 있으면 기능 변경과 별도로 사용자에게 명확히 알립니다.

## 수정 우선순위
- 텍스트, 링크, 기술 목록, 프로젝트 목록 수정: `portfolio.js`
- 섹션 레이아웃 수정: `containers/`
- 공통 UI 수정: `components/`
- 메타 태그, 타이틀, SEO 수정: `components/SEO.jsx`, `pages/index.js`
- 전역 스타일 수정: `styles/styles.css`, `styles/argon-design-system-react.css`
- 앱 전역 스타일 로드 수정: `pages/_app.js`

## 주의사항
- `out/` 디렉터리는 생성 결과물이므로 직접 수정하지 않습니다.
- 배포 결과를 바꾸려면 원본 소스를 수정한 뒤 다시 빌드합니다.
- 하위 디렉터리 작업 전에는 추가 `AGENTS.md` 존재 여부를 먼저 확인합니다.
- 새로운 라이브러리, 빌드 도구, 폴더 구조 개편은 사용자가 명시적으로 요청한 경우에만 진행합니다.
- 외부 API 사용이 포함된 파일은 정적 빌드 시점 동작을 함께 고려합니다.

## 개발 명령
- 의존성 설치: `npm install`
- 개발 서버 실행: `npm run dev`
- 린트 실행: `npm run lint`
- 프로덕션 빌드 + 정적 export: `npm run build`
- GitHub Pages 배포용 산출물 준비: `npm run build` 또는 `npm run predeploy`
- GitHub Pages 배포 실행: `npm run deploy`
- `npm run deploy`는 `package.json`의 `predeploy`를 먼저 실행하므로, 빌드와 `.nojekyll` 생성까지 자동으로 이어집니다.

## 작업 절차
- 기능/문구 수정 전 관련 데이터 파일과 렌더링 컴포넌트를 함께 확인합니다.
- 변경 범위가 UI라면 소스 파일만 수정하고, `out/`은 사용자가 원할 때만 재생성합니다.
- 가능하면 변경 후 `npm run lint` 또는 관련 검증 명령으로 확인합니다.
- 검증이 불가능한 환경이면 그 사실을 사용자에게 명확히 알립니다.
- 화면 오류가 의심되면 `pages/index.js`의 섹션 import, 렌더 순서, 데이터 참조를 우선 점검합니다.
- 콘텐츠 작업에서는 실제 사용자 정보와 샘플 데이터가 섞여 있는지 확인합니다.
- 배포 관련 수정에서는 `package.json`, `next.config.js`, 정적 자산 경로를 함께 검토합니다.

## 요청 템플릿
- 문구 수정 요청: "어느 섹션의 어떤 문구를 무엇으로 바꿀지"를 함께 적습니다.
- UI 수정 요청: "대상 섹션", "원하는 변화", "참고 스타일"을 함께 적습니다.
- 데이터 수정 요청: "수정 파일", "추가/변경/삭제 항목", "실제 값"을 함께 적습니다.
- 배포 요청: "`npm` 기준인지 `yarn` 기준인지", "배포까지만 할지 빌드 검증도 할지"를 함께 적습니다.
- 리뷰 요청: "버그 중심", "구조 중심", "배포 위험 중심" 중 무엇을 중점으로 볼지 적습니다.

## 요청 예시
- "`portfolio.js`에서 자기소개 문구를 더 간결한 한국어로 바꿔줘."
- "`Projects` 섹션 카드 간격을 줄이고 모바일에서 1열로 보이게 해줘."
- "`Experience` 데이터의 회사명과 기간을 실제 이력으로 교체해줘."
- "`npm` 기준으로 배포 흐름이 맞는지 점검해줘."
- "이 레포를 버그 중심으로 리뷰해줘."

## 리뷰 체크리스트
- import 경로 오타, 중복 선언, 잘못된 컴포넌트 조합이 없는지 확인합니다.
- `portfolio.js`에 샘플 데이터와 실제 사용자 데이터가 혼재하는지 확인합니다.
- GitHub Pages 정적 export 환경에서 문제될 수 있는 코드가 없는지 확인합니다.
- SEO 메타 정보와 실제 포트폴리오 내용이 어긋나지 않는지 확인합니다.
- 사용하지 않는 컴포넌트, 중복 렌더링, 오타성 속성 선언을 확인합니다.

## 배포 메모
- `package.json` 기준 `predeploy`는 `npm run build && touch out/.nojekyll` 입니다.
- `predeploy`를 거치지 않고 수동으로 배포할 경우에는 `npm run build` 후 `touch out/.nojekyll` 를 별도로 실행합니다.
- `npm run deploy` 실행 시 최종적으로 `gh-pages -d out -t true`를 실행합니다.
- - `build` 스크립트는 `next build && next export`입니다.
- GitHub Pages 관련 작업에서는 `homepage` 값과 정적 자산 경로 영향 여부를 함께 확인합니다.
- 배포 산출물은 `out/` 아래 생성됩니다.
