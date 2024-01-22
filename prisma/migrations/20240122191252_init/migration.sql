-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "user_first_name_last_name_index" ON "users"("first_name", "last_name");

-- CreateIndex
CREATE INDEX "email_index" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_first_name_last_name_key" ON "users"("first_name", "last_name");
