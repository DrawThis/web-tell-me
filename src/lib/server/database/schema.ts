import { toSnakeCase } from 'drizzle-orm/casing';
import { sqliteTable, integer, text, uniqueIndex } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable(
	'user',
	{
		id: text('id').primaryKey().notNull(),
		email: text('email').notNull().unique(),
		password: text('password').notNull()
	},
	(schema) => {
		return {
			emailUnique: uniqueIndex('user_email_unique').on(schema.email)
		};
	}
);

export const users = sqliteTable('users', {
	id: integer('id').primaryKey(),
	username: text('username').notNull(),
	email: text('email')
});

export const usuarios =  sqliteTable('usuarios', {
	id: text('id')
	.primaryKey()
	.$defaultFn(() => crypto.randomUUID()),
	username: text('username').notNull(),
	email: text('email').notNull(),
	rol: text('rol').notNull(),
	password: text('password'),
	token: text('token'),
});

