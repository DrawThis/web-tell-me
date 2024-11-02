import { sqliteTable, AnySQLiteColumn, integer, text, numeric, foreignKey, primaryKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const users = sqliteTable("users", {
	id: integer("id").primaryKey(),
	username: text("username"),
	email: text("email").notNull(),
	password: text("password").notNull(),
	registrationDate: numeric("registration_date").default(sql`(datetime('now', '-5 hours'))`),
});

export const themes = sqliteTable("themes", {
	id: integer("id").primaryKey(),
	historia: text("historia"),
	dibujo: text("dibujo"),
	puntillismo: text("puntillismo"),
	tangram: text("tangram"),
	perspectiva: text("perspectiva"),
	anatomia: text("anatomia"),
	creatividad: text("creatividad"),
});

export const levels = sqliteTable("levels", {
	id: integer("id").primaryKey(),
	themesId: integer("themes_id").notNull().references(() => themes.id),
});

export const userLevels = sqliteTable("user_levels", {
	usersId: integer("users_id").notNull().references(() => users.id),
	levelsId: integer("levels_id").notNull().references(() => levels.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.usersId, table.levelsId], name: "user_levels_users_id_levels_id_pk"})
	}
});

export const themesUsers = sqliteTable("themes_users", {
	usersId: integer("users_id").notNull().references(() => users.id),
	themesId: integer("themes_id").notNull().references(() => themes.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.usersId, table.themesId], name: "themes_users_users_id_themes_id_pk"})
	}
});