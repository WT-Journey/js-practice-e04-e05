/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього користувач має бути:
 * - другом
 * - онлайн
 * - без режиму не турбувати
 */

const isOnline = true;
const isFriend = true;
const isDnd = false;

// const canOpenChat = isOnline && isFriend;
const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Можна відкрити чат? ', canOpenChat);