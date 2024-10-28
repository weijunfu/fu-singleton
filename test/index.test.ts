import { strict as assert } from 'assert';

import singleton from '../src/index';

describe('Array', function() {
    describe('Author是否为单例', function() {

        it('单例 - 无参', function() {    
            class Author {
            
                constructor() {
                    console.log('create author...')
                }
            }

            const author = singleton(Author);

            const author1 = new author();
            const author2 = new author();

            assert.strictEqual(author1 == author2, true);
        });


        class User {
            name: string;
            constructor(name: string) {
                this.name = name
            }

            getName(): string {
                return this.name
            }

            setName(name: string): void {
                this.name = name
            }
        }

        const user = singleton(User);

        it('单例 - 有参', () => {
            const u1 = new user('ijunfu');
            const u2 = new user('ijunfu')

            assert.strictEqual(u1 == u2, true);
        })

        it('单例 - 有参2', () => {
            const u = new user('ijunfu');
            u.setName('@福')

            assert.strictEqual(u.getName() == '@福', true);
        })
    });
});
