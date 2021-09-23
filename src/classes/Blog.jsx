import Title from "../components/Title";
import A from "../components/A";
import Post from "../sections/blog/Post";
export default class Blog {
    style;
    data;

    constructor({ style, data }) {
        this.style = style;
        this.data = data;
    }

    #defaultComponent = ({
        parent,
        childrens,
        showMore = false,
        path = "",
        reload = false,
    }) => {
        return (
            <div className={this.style.topicContainer}>
                <Title>{parent.title}:</Title>
                <div className={this.style.blogsList}>
                    {childrens.map((children, childrenIndex) => {
                        let numberOfItens =
                            document.body.clientWidth > 1060 ||
                            document.body.clientWidth < 700
                                ? 3
                                : 2;
                        if (!showMore || childrenIndex < numberOfItens) {
                            console.log(reload);
                            return (
                                <A
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    to="Search"
                                    reload={reload}
                                    page={`blog/${path}${parent.id}/${children.id}`}
                                    className={this.style.blogItem}
                                >
                                    <div className={this.style.overlay}></div>
                                    <h3>{children.title}</h3>
                                </A>
                            );
                        }
                    })}
                </div>
                {showMore ? (
                    <A
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}
                        to="Search"
                        page={`blog/${parent.id}`}
                    >
                        Ver mais
                    </A>
                ) : (
                    ""
                )}
            </div>
        );
    };

    #normalizeSize = (toNormalize) => {
        let numberOfItens =
            document.body.clientWidth > 1060 || document.body.clientWidth < 700
                ? 3
                : 2;
        console.log(numberOfItens);
        let rest = toNormalize.length % numberOfItens;
        let normalized = [...toNormalize];
        if (normalized.length === 0) {
            for (let i = 0; i < numberOfItens; i++) {
                normalized.push({
                    title: "Em desenvolvimento",
                    id: "working",
                });
            }
        } else if (rest !== 0) {
            for (let i = 0; i < numberOfItens - rest; i++) {
                normalized.push({
                    title: "Em desenvolvimento",
                    id: "working",
                });
            }
        }
        return normalized;
    };

    #getTopicByName = (route) => {
        if (route) {
            return this.data.find((topic) => topic.id === route.topic);
        }
        return;
    };

    #getTopics = ({ route }) => {
        let result = (
            <>
                {this.data.map((val) => {
                    let childrens = val.pages;
                    if (val.posts) {
                        childrens = val.posts;
                    }
                    childrens = this.#normalizeSize(childrens);

                    if (route.topic) {
                        if (route.topic === val.id) {
                            return this.#defaultComponent({
                                parent: {
                                    title: val.title,
                                    id: val.id,
                                },
                                childrens,
                                reload: true,
                            });
                        }
                    } else {
                        return this.#defaultComponent({
                            parent: val,
                            childrens,
                            reload: true,
                            showMore: true,
                        });
                    }
                })}
            </>
        );

        return result;
    };

    #isPageOrPost = ({ route }) => {
        const topic = this.#getTopicByName(route);
        if (route.post) {
            return this.#getPost({ route });
        } else if (topic.pages) {
            return this.#getPage({ route });
        } else {
            return this.#getPost({ route });
        }
    };

    #getPage = ({ route }) => {
        let topic = this.#getTopicByName(route);
        let page = topic.pages.find((page) => {
            return page.id === route.page;
        });
        let childrens = page.posts;
        childrens = this.#normalizeSize(childrens);
        let result = (
            <>
                {this.#defaultComponent({
                    parent: page,
                    childrens,
                    path: `${route.topic}/`,
                })}
            </>
        );

        return result;
    };

    #getPost = ({ route }) => {
        let data;
        let topic = this.#getTopicByName(route);
        data = topic.pages.find((page) => {
            return page.id === route.page;
        });
        if (route.post) {
            data = data.posts.find((post) => {
                return post.id === route.post;
            });
        }
        return <Post data={data} />;
    };

    getTypeByRoute = ({ route }) => {
        const typeFunction = [this.#getTopics, this.#isPageOrPost];

        let indexFunction = 0;

        const topic = this.#getTopicByName(route);
        if (route?.page || route?.post) {
            indexFunction = 1;
        }

        return typeFunction[indexFunction]({ route });
    };
}
