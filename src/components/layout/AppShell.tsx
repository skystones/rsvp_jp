import { PropsWithChildren } from "react";

export const AppShell = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-slate-900 dark:from-slate-900 dark:to-slate-950 dark:text-slate-100">
      <header className="border-b border-slate-200 bg-white/70 px-6 py-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <h1 className="text-2xl font-semibold tracking-tight">RSVP-JP プロジェクト</h1>
        <p className="mt-1 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
          日本語テキスト向けのRapid Serial Visual Presentationビューアの基盤プロジェクトです。
        </p>
      </header>
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-6 py-10">
        <section className="rounded-2xl border border-dashed border-slate-300 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
          <h2 className="text-lg font-medium">開発ガイド</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            本プロジェクトでは、TDDを基本とした増分的な開発を行います。今後の実装は、テキスト入力、形態素解析、PDF対応、RSVP表示、再生制御、テーマ切替などの機能モジュールに分割し、<code>src/features</code>ディレクトリに配置します。
          </p>
        </section>
        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">テスト</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              <code>vitest</code> と <code>@testing-library/react</code> によるユニット・コンポーネントテストを活用します。<code>npm run test</code> でテストスイートを実行できます。
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">ディレクトリ構成</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li><code>src/components</code>: UIコンポーネントとレイアウト</li>
              <li><code>src/features</code>: ドメイン機能別のモジュール</li>
              <li><code>src/lib</code>: 共通ユーティリティやAPIクライアント</li>
              <li><code>src/hooks</code>: カスタムフック</li>
              <li><code>src/styles</code>: スタイル関連ファイル</li>
            </ul>
          </article>
        </section>
        {children}
      </main>
      <footer className="border-t border-slate-200 bg-white/70 px-6 py-4 text-sm text-slate-500 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400">
        RSVP-JP © {new Date().getFullYear()}
      </footer>
    </div>
  );
};
