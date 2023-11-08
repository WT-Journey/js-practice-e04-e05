/*
 * Напиши скрипт перевірки підписки користувача при доступі до контенту
 * - Є три типи передплати (підписки): free, pro та vip.
 * - Отримати доступ можуть лише користувачі pro та vip
 */

const sub = 'free';

// якщо користувач pro або користувач vip, тоді є доступ

const canAccessContent = sub === 'pro' || sub === 'vip';
// true || false => true
// false || true => true
// false || false => false

console.log('Чи є доступ до контенту? ', canAccessContent);