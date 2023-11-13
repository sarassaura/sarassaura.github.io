// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'br'
	| 'en'
	| 'es'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * H​i​,
	 */
	hi: string
	/**
	 * {​0​}
	 * @param {unknown} 0
	 */
	link: RequiredParams<'0'>
}

export type TranslationFunctions = {
	/**
	 * Hi,
	 */
	hi: () => LocalizedString
	/**
	 * {0}
	 */
	link: (arg0: unknown) => LocalizedString
}

export type Formatters = {}