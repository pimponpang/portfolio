import Image from "next/image";

type Work = { number: string; category: string; title: string; body: string; role: string; images: Array<[string, string, string?]> };

const works: Work[] = [
  { number: "1", category: "Disney関連サービス", title: "世界観を守り、ブランド群をひとつの体験へ", body: "Disney mobile、Disneyアプリ、Disney CARDCLUB、Disney.co.jp。各ブランドの世界観とレギュレーションを守りながら、サイト、アプリ、LP、バナー、動画を制作・運用しました。Disney CARDCLUBは立ち上げから参加し、ヒアリング、設計、デザイン、コーディング、運用まで担当しました。", role: "担当：デザイン・ディレクション・コーディング", images: [
    ["/portfolio-assets/disney-cardclub.jpg", "Disney CARDCLUB"], ["/portfolio-assets/disney-web.jpg", "Disney.co.jp"], ["/portfolio-assets/disney-mobile-site-original.jpg", "Disney mobile"], ["/portfolio-assets/disney-app.jpg", "Disneyアプリ"], ["/portfolio-assets/disney-mail.jpg", "メールマガジン"],
  ] },
  { number: "2", category: "サービスデザイン", title: "デジタルとリアルを往復し、体験をひとつにつなぐ", body: "キッチンカー事業に立ち上げから参加。前身のフードトラックマーケットからSHOPSTOPへ、購入者・出店者・土地オーナーをつなぐ体験を設計しました。現場の観察とインタビューに加え、仕入れ、仕込み、販売、撤収まで自ら運営。アプリ、印刷物、空間、撮影、イベント運営を横断し、デジタルとリアルの接点を整えました。", role: "担当：サービス設計・アプリ・イベント・空間", images: [
    ["/portfolio-assets/food-truck-market.jpg", "前身アプリ「フードトラックマーケット」", "portrait"], ["/portfolio-assets/shopstop-promo.png", "SHOPSTOP（キッチンカーアプリ）", "wide"], ["/portfolio-assets/communication-wine.jpg", "イベント企画・運営"], ["/portfolio-assets/communication-field-original.jpg", "現場観察とタッチポイント設計", "wide"], ["/portfolio-assets/communication-space.jpg", "空間設計", "wide"], ["/portfolio-assets/communication-flyer-original.jpg", "印刷物・フライヤー", "wide"], ["/portfolio-assets/communication-truck.jpg", "キッチンカー運営", "wide"], ["/portfolio-assets/communication-branding.jpg", "イベントのブランド体験", "wide"],
  ] },
  { number: "3", category: "決済サービス", title: "迷わせない、シンプルでわかりやすい決済体験", body: "QUOカードPayの立ち上げ期からデザイナー1名体制で参画。アプリ版、ブラウザ版、販売サイト、FAQを対象に、要件整理、ワイヤー、UI、ユーザー調査、CSSコーディングを担当しました。継続的なユーザー調査と現場の声をもとに、ギフトの受け取りから決済までを改善しました。", role: "担当：UI/UX・ユーザー調査・CSS", images: [
    ["/portfolio-assets/quo-sales.jpg", "販売サイト", "wide"], ["/portfolio-assets/quo-faq.jpg", "FAQ・ブランド設計", "wide"], ["/portfolio-assets/quo-ui-master-original.jpg", "アプリUI設計", "portrait"], ["/portfolio-assets/quo-valuecode-original.png", "バリューコード入力体験", "wide"],
  ] },
  { number: "4", category: "アプリデザイン", title: "単発のアイデアから、数字で育てるサービスまで", body: "コミュニケーション、エンターテインメント、販促など、目的の異なるアプリを設計してきました。運用型サービスは更新性と読みやすさ、カジュアルゲームは短時間で遊べる軽快さを重視。一筆書き300万DL、バッテリーセーバー400万DL、ひまチャット60万DLを記録しました。", role: "担当：UI/UX・グラフィック・ディレクション", images: [
    ["/portfolio-assets/app-hitmeup.jpg", "HitmeUP", "portrait"], ["/portfolio-assets/app-eva.jpg", "モバスロ エヴァンゲリオン", "portrait"], ["/portfolio-assets/app-mumo.jpg", "mu-mo for Lawson", "portrait"], ["/portfolio-assets/app-one-stroke.jpg", "一筆書き", "portrait"], ["/portfolio-assets/app-number-place.jpg", "ナンプレ", "portrait"],
  ] },
  { number: "5", category: "制作実績", title: "デザインと実装を横断した仕事の抜粋", body: "音楽、ゲーム、テレビ、広告、販促などの領域で、Webとグラフィックを制作。デザイナーとコーダー、両方の視点を持ちながら、アイデアを実際に使える形まで仕上げてきました。", role: "担当：デザイン・コーディング・Web・プロモーション", images: [
    ["/portfolio-assets/other-moumoon.jpg", "moumoon", "square"], ["/portfolio-assets/other-kismyft2.jpg", "Kis-My-Ft2", "square"], ["/portfolio-assets/other-hikaritv.jpg", "ひかりTV GAME", "wide"], ["/portfolio-assets/other-mrbrain.jpg", "MR.BRAIN", "square"], ["/portfolio-assets/other-dqwars.jpg", "DQウォーズ", "square"], ["/portfolio-assets/other-terminator.jpg", "TERMINATOR", "wide"], ["/portfolio-assets/other-veronicamars.jpg", "VERONICA MARS", "wide"],
  ] },
];

const currentWork = [
  ["01", "2025–2026｜新規事業・UI/UX", "kikimo", "複雑な条件を、迷わず進める体験へ。新規サービスの情報設計からUI/UXまで。"],
  ["02", "2025–2026｜業務設計・自動化", "業務ポータル統合設計", "情報源を一つに集約し、Teams通知と申請運用を接続。現場が迷わない業務基盤へ。"],
  ["03", "2025–2026｜展示会・コミュニケーション", "展示会・ブランド体験", "FIT、J-LIS、採用施策を横断し、伝える内容と接点を一貫した体験として設計。"],
];
const aiSteps = [["01", "探索", "Driveや既存資料から、必要な根拠と素材を早く集める。"], ["02", "構造化", "要件、情報設計、コピー案を比較できる形に整理する。"], ["03", "制作支援", "コピー、構成、試作、業務自動化の検証を支援する。"], ["04", "品質判断", "ユーザー視点、文脈、機密性を人が確認し、仕上げる。"]];

function WorkChapter({ work }: { work: Work }) {
  return <article className="chapter" id={`work-${work.number}`}><div className="chapter-layout">
    <div className="chapter-number" aria-hidden="true"><strong>{work.number}</strong><span /></div>
    <div className="chapter-content"><p className="category">{work.category}</p><h2>{work.title}</h2><p className="chapter-body">{work.body}</p><p className="role">{work.role}</p>
      <div className="gallery">{work.images.map(([src, label, format], index) => <figure className={`work-card ${format ?? ""}`} key={`${work.number}-${src}`}><div className="image-stage"><Image src={src} alt={`${label}の制作実績`} fill unoptimized sizes="(max-width: 720px) calc(100vw - 48px), (max-width: 1100px) 42vw, 450px" /></div><figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong></figcaption></figure>)}</div>
    </div>
  </div></article>;
}

export default function Home() {
  return <main id="top">
    <a className="skip-link" href="#works">実績へ移動</a>
    <header className="site-header"><a className="wordmark" href="#top">堀内 浩</a><nav aria-label="メインナビゲーション"><a href="#works">制作実績</a><a href="#current">現在地</a><a href="#ai">AI活用</a><a href="#profile">プロフィール</a></nav></header>
    <section className="hero shell"><p className="category">UI/UX・プロダクトデザイナー</p><h1>仕組みをデザインする。</h1><div className="hero-lower"><p className="hero-lead">20年以上のWeb制作経験を礎に、事業・技術・ユーザー体験をつなぐUI/UXデザイナー。</p><div className="actions"><a href="#works">制作実績を見る</a><a href="#current">最近の仕事を見る</a></div></div><div className="proof"><div><strong>20年以上</strong><span>Web・アプリ・ブランドのデザイン経験</span></div><div><strong>調査から改善まで</strong><span>ユーザーと現場を起点に設計</span></div><div><strong>事業と開発をつなぐ</strong><span>実装・運用を踏まえたプロトタイピング</span></div></div></section>
    <section className="works-intro shell" id="works"><p className="category">制作実績</p><div><h2>体験をつくる、5つの領域。</h2><p>決済のわかりやすさ、ブランドの世界観、現場での使われ方。制作物と、その背景にある設計を紹介します。</p></div></section>
    <section className="works-list">{works.map((work) => <WorkChapter work={work} key={work.number} />)}</section>
    <section className="current" id="current"><div className="shell"><p className="category">現在地</p><h2>画面から、組織の動きへ。</h2><p className="current-lead">長年のプロダクト・ブランド経験を、業務基盤とAI活用へ拡張した最近の仕事です。</p><div className="current-grid">{currentWork.map(([n, meta, title, body]) => <article key={n}><span>{n}</span><p>{meta}</p><h3>{title}</h3><p>{body}</p></article>)}</div><div className="why"><h3>デザインの対象が、画面から組織の動きへ。</h3><p>要件整理、プロトタイプ、関係者調整、実装支援、改善までを一つの流れとして扱います。</p></div></div></section>
    <section className="ai shell" id="ai"><p className="category">AIとの仕事</p><h2>AIで速くする。<br />判断と品質は手放さない。</h2><p className="ai-lead">探索、整理、試作、検証をAIで短縮し、課題設定と最終判断に時間を使います。</p><div className="ai-grid">{aiSteps.map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="profile shell" id="profile"><div className="profile-head"><div><p className="category">プロフィール</p><h2>堀内 浩</h2><p>Hiroshi Horiuchi</p></div><div className="profile-copy"><p>Web黎明期から20年以上、数多くのECサイトやWebサービスの制作に携わってきました。</p><p>大学在学中にLAMP EXPERTを取得。Webの表現だけでなく、サーバーサイドの仕組みやシステムの構造、運用への理解を培ってきました。</p><p>技術が変化するたびに知識と手法を更新し、現在はUI/UX設計、デザインシステム、企業ブランディング、業務改善まで活動領域を広げています。</p><p>私が重視するのは、見た目を整えるだけではなく、使う人にとって分かりやすく、事業として機能し、運用し続けられる仕組みを設計すること。</p><p>FigmaやAIなどの新しい技術も取り入れながら、課題の整理から情報設計、制作、実装との連携、継続的な改善までを一貫して考えます。</p><p>デザインを成果物で終わらせず、事業を動かす仕組みにする。</p><p>それが、20年以上の経験を通じて培ってきた私の専門性です。</p><p className="current-role">2025年7月〜現在　SocioFuture株式会社<br />UI/UXデザイナー／コミュニケーションデザイナー</p></div></div><div className="skills"><article><span>01</span><h3>プロダクト・UI/UX</h3><p>要件整理・情報設計<br />Figmaプロトタイピング<br />ユーザー調査・継続改善</p></article><article><span>02</span><h3>ブランド・コミュニケーション</h3><p>VI・キービジュアル<br />展示会・採用施策<br />コピー・制作ディレクション</p></article><article><span>03</span><h3>業務・運用設計</h3><p>SharePoint・Teams<br />Power Automate<br />実装理解を活かした設計と検証</p></article></div></section>
    <footer><div className="shell"><p className="category">お問い合わせ</p><h2>課題の話から、始めましょう。</h2><div className="footer-row"><p>ご連絡は転職サイト内のメッセージからお願いします。<br />公開できない詳細は、面談時にご説明します。</p><a href="#top">ページ上部へ ↑</a></div><small>HIROSHI HORIUCHI　PORTFOLIO 2026</small></div></footer>
  </main>;
}
