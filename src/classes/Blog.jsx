import Title from "../components/Title";
import A from "../components/A";
import Page from "../sections/blog/Page";
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
    }) => {
        return (
            <div className={this.style.topicContainer}>
                <Title>{parent.title}:</Title>
                <div className={this.style.blogsList}>
                    {childrens.map((children, childrenIndex) => {
                        if (!showMore || childrenIndex < 3) {
                            let link = `blog/${path}${parent.id}/${children.id}`;
                            console.log(link, "----------", path);
                            return (
                                <A
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    to="Search"
                                    page={link}
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
        let rest = toNormalize.length % 3;
        let normalized = [...toNormalize];
        if (normalized.length === 0) {
            for (let i = 0; i < 3; i++) {
                normalized.push({
                    title: "Em desenvolvimento",
                    id: "working",
                });
            }
        } else if (rest !== 0) {
            for (let i = 0; i < 3 - rest; i++) {
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
                            });
                        }
                    } else {
                        return this.#defaultComponent({
                            parent: val,
                            childrens,
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
        if (topic.pages) {
            return this.#getPage({ route });
        } else {
            return this.#getPost({ route });
        }
    };

    #getPage = ({ route }) => {
        let topic = this.#getTopicByName(route);
        let page = topic.pages.find((page) => {
            return page.id === route.post;
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
        return <Page />;
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
