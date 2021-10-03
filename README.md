<br />

### `Front-end Development Challenge`

# Challenge Overview


Shopify is extending our mission to Make Commerce Better for Everyone to include the whole entire universe. We need a webpage with a simple to use interface that utilizes accessible/semantic HTML served client-side and makes it easy to:

- Fetch data from one of NASA’s APIs and display the resulting images
	- You are free to use any NASA API you like
	- You are free to use any front end framework/component library you like (or none at all!)
- Display descriptive data for each image
	- Each image result should list at least a title, date of capture (ideally in earth_date) and a button to “like” that image
- Like an image
- Unlike an image

<br />

# My Approach

Since this is my second attempt at a submission for a Shopify developer internship, I wanted to improve on a few areas of my first submission (viewable here: [Shoppies](https://github.com/TopicalTom/Shoppies)) that I thought were lacking. These areas related to:
- How I managed state within my project
- How I linked that state back to an individual
- Where an individuals' personal content is stored

To address these projects needs for my first submission, I originally relied heavily on using a combination of the [Context API](https://reactjs.org/docs/hooks-reference.html#usecontext) and [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) which isn't the most optimal solution as they came with some significant limitations when it came to functionality. To overcome those technical limitations with this project, I have spent the past year taking additional Udemy courses and putting the concepts I learned to practical use so that I could develop a more complete project this year.

<br />

# What I Used

Building off of my initial approach of expanding my technical knowledge, I also wanted to familiarize myself with more of Shopify's tech stack so that I would have a better understanding of the toolbox I might be using under this position. One of those areas I recently explored, and took a stab at in this project is [Typescript](https://www.typescriptlang.org/docs/handbook/react.html). In addition to trying out Typescript, I utilized the following concepts in creating my solution:

- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
  - [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
  - [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Redux](https://react-redux.js.org/)
	- [useDispatch](https://react-redux.js.org/api/hooks#usedispatch)
	- [useActions](https://react-redux.js.org/api/hooks#recipe-useactions)
	- [useSelector](https://react-redux.js.org/api/hooks#useselector)
- [Firebase](https://firebase.google.com/docs/build)
	- [Authentication](https://firebase.google.com/docs/auth/web/start)
	- [Firestore](https://firebase.google.com/docs/firestore/quickstart)
- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Array Methods](https://www.w3schools.com/jsref/jsref_obj_array.asp)
  - [Split](https://www.w3schools.com/jsref/jsref_obj_split.asp)
  - [Filter](https://www.w3schools.com/jsref/jsref_filter.asp)
- [NASA API](https://api.nasa.gov/)
- [Axios](https://www.npmjs.com/package/axios)
- [Toastify](https://fkhadra.github.io/react-toastify/introduction/)

<br />

# My Solution

With that said, I have broken down each of the main technical requirements into their own section below as well as the additional features I implemented that I felt would lend to a more complete project and user journey:

<br />

### Fetch data from one of NASA’s APIs

When a user accesses the site for the first time they will be presented with the "Explore" Page that showcases a random assortment of images (about 20 in total) from NASA's APOD API on their feed.

<a href="https://imgbb.com/"><img src="https://i.ibb.co/tL4Nqvg/DCFetch.gif" alt="DCFetch" border="0"></a>

<br />

### Display descriptive data for each image

For each of these images on a user's feed, descriptive data such as photoURL, title, explanation and date were passed down as props from the NASA API as well as a custom boolean value of isLiked for use updating the UI to display "liked" status.

<a href="https://imgbb.com/"><img src="https://i.ibb.co/rtJS9Yy/DCDetails.gif" alt="DCDetails" border="0"></a>

<br />

### Register account (bonus)

However, before a user is able to like an image on their feed, they must first register their Google account with the site. This is done by clicking the "Register" button at the top of the page where a user is redirected to an Auth Pop-up to input their credentials. Once authenticated, a unique id associated with their account is used to link their likes to themselves.

<a href="https://imgbb.com/"><img src="https://i.ibb.co/bF160TV/DCRegister.gif" alt="DCRegister" border="0"></a>

<br />

### Like an image

After registering their account, a user is able to like any of the images they see on the daily feed. To do so, they click on the "heart" icon which changes to an active state while also triggering a toast notification to signal their like was successful.

<a href="https://imgbb.com/"><img src="https://i.ibb.co/PhmNkBF/DCLike.gif" alt="DCLike" border="0"></a>

> Note: This aspect of my solution is currently lacking as the user doesn't receive feedback upon clicking the "heart" icon. This might lead to confusion so, instead of nothing happening I need to add an action that redirects them to registering their account. Upon successfully authenticating the user, the image should automatically be added to their liked images as they have already expressed intrest in doing so by clicking the "heart" icon. This feature also prevents against users losing a photo they were interested in as my current setup refreshes the page on auth changes.


<br />

### View liked images (bonus)

Should a user want to look at or manage their current likes, they are able to navigate to the "Likes" page through the "Liked" tab at the top of the "Explore" page. From here they are able to browse all of the likes saved to their current account.

<a href="https://imgbb.com/"><img src="https://i.ibb.co/VStLJKF/DCSaved.gif" alt="DCSaved" border="0"></a>

<br />

### Unlike an image

If a user decides that they don't like an image they previously liked and want to curate their saved images, they can simply click on the same "heart" icon from before. Upon clicking the "heart" icon, the image disappear from the page and a toast is used to confirm that the image is no longer liked.

<a href="https://imgbb.com/"><img src="https://i.ibb.co/TvBFN5Q/DCUnlike.gif" alt="DCUnlike" border="0"></a>

<br />

# Solution Breakdown

From a development standpoint, I want to highlight a few areas of my code that enables this user journey to function. While this is just a distilled look, I feel this code demonstrates areas that I wanted to improve over my last experience, while laying the foundation for where I would like to take this application should I continue work on it (see next steps section below).

<br />

### How I managed state in my project

<br />

```javascript
    // hooks/useActions.ts (line 6 - 13)
    
    export const useActions = () => {
        const dispatch = useDispatch();

        // Only runs when dispatch changes (will only run once)
        return useMemo(() => {
            return bindActionCreators(actionCreators, dispatch);
        }, [dispatch]);
    };
```

<br />

```javascript
    // Explore/index.tsx (line 13)
    
    const { fetchAPIImages, fetchNewAPIImages } = useActions();
```

<br />

```javascript
    // imagesActions.ts (line 38 - 51)
    
    export const fetchAPIImages = (): AppThunk => async (dispatch: Dispatch) => {
        try {
            dispatch(setLoading(true));
            dispatch(setFetchSuccess([]));
            const images = await fetchFromAPI();
            if (images) {
                dispatch(setFetchSuccess(images));
            };
        } catch (err) {
            dispatch(setFetchError('There was an issue handling your request, please try again.'));
        } finally {
            dispatch(setLoading(false));
        };
    };
```

<br />

```javascript
    // imagesActions.ts (line 23 - 45)
    
    const imagesSlice = createSlice({
        name: 'images',
        initialState,
        reducers: {
            setLoading: (
                state, 
                { payload }: PayloadAction<boolean>
            ) => {
                state.isLoading = payload;
            },
            setFetchSuccess: (
                state, 
                { payload }: PayloadAction<Image[]>
            ) => {
                state.data = payload;
            },
            setFetchError: (
                state, { payload }: PayloadAction<string>
            ) => {
                state.error = payload;
            },
        },
    });
```

<br />

```javascript
    // Explore/index.tsx (line 14)
    
    const { data, isLoading } = useSelector(imageSelector);
```

<br />

### How I linked that state back to an individual

<br />

```javascript
    // authActions.ts (line 56 - 78)
    
    export const login = (): AppThunk => async (dispatch: Dispatch) => {
        try {
            dispatch(setAuthenticating(true));
            // User is redirected to Google Sign in
            const result = await signInWithPopup(auth, provider);
            const user = {
                uid: result.user.uid,
                displayName: result.user.displayName,
                photoURL: result.user.photoURL
            };
            // Checks for pre-existing account
            await checkUserDatabase(user.uid);
            // Stores relevant Auth data
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                dispatch(setAuth(user));
            }
        } catch (err) {
            dispatch(setAuthError('Unable to login'));
        } finally {
            dispatch(setAuthenticating(false));
        };
    };
```

<br />

```javascript
    // authActions.ts (line 37 - 47)
    
    const checkUserDatabase = async (userID: string) => {
        try {
            const docRef = doc(firestore, "users", userID);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) { 
                createAccount(userID);
            };
        } catch (err) {
            console.log(err);
        };
    };
```

<br />

```javascript
    // authActions.ts (line 26 - 35)
    
    const createAccount = async (userID: string) => {
        try {
            const docRef = doc(firestore, 'users', userID);
            await setDoc(docRef, {
                likes: []
            })
        } catch (err) {
            console.log(err);
        };
    };
```

<br />

A user's authentication details are then stored on Firebase as the following:

<br />

<a href="https://ibb.co/TRPRcN3"><img src="https://i.ibb.co/NpWpxGB/Spacestagram-Auth.png" alt="Spacestagram-Auth" border="0"></a>

<br />

### Where an individuals' personal content is stored

<br />

```javascript
    // likeActions.ts (line 78 - 101)
    
    export const toggleLike = (id: string, imageRef: Image, isLiked: boolean): AppThunk => (dispatch: Dispatch) => {
        try {
            // Manage liked photo in database based on current like status
            dispatch(setLoadingLikes(true));
            updateStoredLikes(id, !isLiked 
                ?   arrayUnion(imageRef) 
                :   arrayRemove(imageRef)
            );
        } catch (err) {
            console.log(err)
            //toast(err.toString());
        } finally {
            // Update UI based on database change
            if (!isLiked) {
                dispatch(setLike(imageRef));
                toast('Photo saved to "liked" collection');
            } else {
                dispatch(setUnlike(imageRef));
                toast('Photo removed from "liked" collection');
            }
            dispatch(setCount());
            dispatch(setLoadingLikes(false));
        };
    };
```

<br />

```javascript
    // likeActions.ts (line 66 - 76)
    
    const updateStoredLikes = async (id: string, action: FieldValue) => {
        try {
            const docRef = doc(firestore, "users", id);
            await updateDoc(docRef, {
                likes: action
            });
        } catch (err) {
            console.log(err)
            //toast(err.toString());
        }
    };
```

<br />

An image's full details are then stored by user on Firebase when liked:

<br />

<a href="https://ibb.co/pwnLBjn"><img src="https://i.ibb.co/YQbLFBb/Spacestagram-Database.png" alt="Spacestagram-Database" border="0"></a>

> Note: Storing the same image details for each user that likes it is not an optimal solution as the same information would exist in multiple locations. If I were to improve this area I would look into storing the image details under the "images" collection once liked for the first time by a user and then passing a reference to that document as a string value for each subsequent user that added a like. This would make it easier to update image details, as it exists in one place and is just referenced by users, but would be more complex to fetch as I would be running multiple "get" requests for individual image documents when a user visits their likes page. Firebase supports [In Queries](https://firebase.google.com/docs/firestore/query-data/queries#in_and_array-contains-any) but is limited to an array of 10 values so I would have to find a more elegant solution to support this optimization.

<br />

# Next Steps

Like most of these development challenges, there is a bunch I would like to improve on. From a feature perspective, based on the challenge prompt's use of "share photos", I would look into adding a more social dynamic to the application and allow users to see who else liked a particular photo. Design-wise, this would look similar to how Instagram displays users who liked an image, but instead of redirecting to a user profile (when clicked or touched) it would redirect to a collection of images that were also liked by fellow users of the photo they are looking at. This would enable users to potentially find new photos based on similar interests and build a curated collection of universe photos that speak to them.
