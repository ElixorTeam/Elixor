type DefaultLangCode = "en"
type SupportedLangCode = "ru"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/" 
type RouteParams = {"/": undefined; }
type TranslationPath = "home.slogan" | "home.sloganButton" | "home.aboutBlock" | "home.postFounder" | "home.postCoFounder" | "home.postBackend" | "home.postFullstack" | "home.postFrontend" | "home.commentDanil" | "home.commentArtyom" | "home.commentGregory" | "home.projectsTitle" | "home.shortyBlock"
type TranslationOptions = { "home.slogan": {} | undefined; "home.sloganButton": {} | undefined; "home.aboutBlock": {} | undefined; "home.postFounder": {} | undefined; "home.postCoFounder": {} | undefined; "home.postBackend": {} | undefined; "home.postFullstack": {} | undefined; "home.postFrontend": {} | undefined; "home.commentDanil": {} | undefined; "home.commentArtyom": {} | undefined; "home.commentGregory": {} | undefined; "home.projectsTitle": {} | undefined; "home.shortyBlock": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: Uri extends keyof RouteParams
			? undefined extends RouteParams[Uri]
				? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
				: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
