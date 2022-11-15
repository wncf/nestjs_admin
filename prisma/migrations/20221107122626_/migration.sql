-- CreateTable
CREATE TABLE "roles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "role_name" TEXT NOT NULL,
    "role_desc" TEXT NOT NULL DEFAULT '',
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT '',
    "avatar_url" TEXT NOT NULL DEFAULT '/user/default_user_avatar.png',
    "rid" INTEGER NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "users_rid_fkey" FOREIGN KEY ("rid") REFERENCES "roles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "menus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "menu_name" TEXT NOT NULL DEFAULT '',
    "menu_path" TEXT NOT NULL DEFAULT '',
    "parent_id" INTEGER NOT NULL DEFAULT 0,
    "menu_icon" TEXT,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "role_menus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "enable" BOOLEAN NOT NULL DEFAULT true,
    "rid" INTEGER NOT NULL,
    "mid" INTEGER NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "role_menus_rid_fkey" FOREIGN KEY ("rid") REFERENCES "roles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "role_menus_mid_fkey" FOREIGN KEY ("mid") REFERENCES "menus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Books" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "book_name" TEXT NOT NULL DEFAULT '',
    "book_url" TEXT NOT NULL DEFAULT '',
    "uid" INTEGER NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Books_uid_fkey" FOREIGN KEY ("uid") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_id_key" ON "roles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "roles_role_name_key" ON "roles"("role_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_name_key" ON "users"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "menus_id_key" ON "menus"("id");

-- CreateIndex
CREATE UNIQUE INDEX "menus_menu_name_key" ON "menus"("menu_name");

-- CreateIndex
CREATE UNIQUE INDEX "menus_menu_path_key" ON "menus"("menu_path");

-- CreateIndex
CREATE UNIQUE INDEX "role_menus_id_key" ON "role_menus"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Books_id_key" ON "Books"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Books_book_name_key" ON "Books"("book_name");
